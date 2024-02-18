
# RUN ON AGENTVERSE
# MATH PROCESSING AGENT IN CHARGE OF GRADING PROVIDED SOLUTION AND PROBLEM TO ASSIGNMENT

if OPENAI_API_KEY == "YOUR_OPENAI_API_KEY":
    raise Exception("You need to provide an API key for OPEN AI to use this example")

# Configuration for making requests to OPEN AI 
OPENAI_URL = "https://api.openai.com/v1/chat/completions"
MODEL_ENGINE = "gpt-4"
HEADERS = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {OPENAI_API_KEY}"
}


class Request(Model):
    text: str


class Error(Model):
    text: str


class Data(Model):
    value: float
    timestamp: str
    confidence: float
    details: str
    notes: str

class DataAll(Model):
    grades: List[Data]

class Problem(Model):
    numbers: List
    work: List

class Problems(Model):
    solutions: Problem
    homeworks: Problem


# Send a prompt and context to the AI model and return the content of the completion
def get_completion(context: str, prompt: str, max_tokens: int = 1024):
    data = {
        "model": MODEL_ENGINE,
        "messages": [
            {"role": "system", "content": context},
            {"role": "user", "content": prompt},
        ],
        "max_tokens": max_tokens,
    }

    try:
        response = requests.post(OPENAI_URL, headers=HEADERS, data=json.dumps(data))
        messages = response.json()['choices']
        message = messages[0]['message']['content']
    except Exception as ex:
        return None

    print("Got response from AI model: " + message)
    return message


# Instruct the AI model to retrieve data and context for the data and return it in machine readable JSON format
def get_data(ctx: Context, request: str, problems: Problems):
    context = '''    
    You are a homework grader whose job is to analyze and compare a solution to a problem and an attempted
    solution to that problem along with relevant context on what the attempt did wrong if anything.

    Follow these guidelines:
    1. Try to grade the problem as accurately as possible to the correct solution provided.
    2. Rate your confidence in the accuracy of your grade from 0 to 1 based on work provided from the attempted solution
    3. In the last line of your response, provide the information in the exact JSON format: {"value": value, "timestamp": time, "confidence": rating, "details": content, "notes": summary}
        - value is the numerical value of the grade from 1 - 10
        - time is the approximate timestamp when this value was published in ISO 8601 format
        - rating is your confidence rating of the grade from 0 to 1, and can vary based on readability of information provided
        - content is ONLY the explanation content you outputted and THAT IS JSON DECODEABLE MEANING SPECIAL CHARACTERS LIKE \ AND , ARE CHANGED
        - summary states if both final answers match and a brief justification for the confidence rating (what you are confident or not confident in the accuracy of the value so that a human can look over it)
    '''

    processingContext = '''
    You are a parser who's job is to make sense of pieces of text that seem unintelligble and could also
    include non-english characters. output the text that makes the most sense using the context surrounding
    any unintelligble phrases. these phrases could also be math related and might need some LaTeX writing.
    '''

    ctx.logger.info(f"solutions {problems.solutions}")
    ctx.logger.info(f"homework {problems.homeworks}")

    try:
        all_grades = []
        for i in range(len(problems.solutions.numbers)):
            #processed_text = get_completion(processingContext, problems.homeworks.work[i], max_tokens=2048)
            
            request = f"solution: {problems.solutions.work[i]} \n homework: {problems.homeworks.work[i]}"

            response = get_completion(context, request, max_tokens=2048)
            

            data = json.loads(response.splitlines()[-1])
            msg = Data.parse_obj(data)
            all_grades.append(msg)
            ctx.logger.info(f"{all_grades}")


    
        msg = DataAll(grades= all_grades)
        ctx.logger.info(f"MSG {msg}")
        return msg

    except Exception as ex:
        ctx.logger.exception(f"An error occurred retrieving data from the AI model: {ex}")
        return Error(text="Sorry, I wasn't able to answer your request this time. Feel free to try again.")

# Message handler for data requests sent to this agent
@agent.on_message(model=Request)
async def handle_request(ctx: Context, sender: str, request: Request):
    ctx.logger.info(f"Got request from {sender}: {request.text}")
    response = get_data(ctx, request.text)
    await ctx.send(sender, response)

# Message handler for data requests sent to this agent
@agent.on_message(model=Problems)
async def handle_request(ctx: Context, sender: str, request: Problems):
    ctx.logger.info(f"Got request from {sender}: {request.text}")
    response = get_data(ctx, "", request)
    sender = "agent1qtdqyepen9wy6hgz2a23ythk5x2zy9fxkpp0yceke3xkpgr25aj7va08nhw"
    await ctx.send(sender, response)