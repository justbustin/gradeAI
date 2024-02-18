import json
import time

# RUN ON AGENTVERSE
# PREPROCESSING AGENT TO PARSE PAGE OF PROBLEMS INTO SEPARATE PROBLEMS

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
    solution: str
    homework: str


class Error(Model):
    text: str

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

    #print("Got response from AI model: ")
    return message


# Instruct the AI model to retrieve data and context for the data and return it in machine readable JSON format
def get_data(ctx: Context, solution, homework):
    context = '''    
    Your role is as a sophisticated Homework Parser. Your objective is to ensure each submission is organized based on the specific problem numbers and includes all corresponding work.

    Follow these guidelines:

    1. Organize the text submissions by identifying and aligning them with their respective problem numbers, alongside all related work. Your sorting should be as precise and accurate as possible, ensuring each problem's work is correctly associated.

    2. In the last line of your response, you are to format the output in a JSON structure in only ONE line. This structure should encapsulate the details of the homework problems and their corresponding work as follows:

    "numbers": An array containing the problem numbers from the assignment, formatted as strings. This array should capture the sequence of problems as presented in the submission.

    "work": A parallel array to "numbers", containing the detailed work THAT IS JSON DECODEABLE MEANING SPECIAL CHARACTERS LIKE \ and , ARE CHANGED accordingly associated with each problem number that is JSON decodeable. The work should be matched with the corresponding problem number's index.


    '''

    ctx.logger.info(f"solutions {solution}")
    ctx.logger.info(f"homeworks {homework}")

    response_solutions = get_completion(context, solution, max_tokens=2048)
    response_homeworks = get_completion(context, homework, max_tokens=2048)

    ctx.logger.info(f"solutions {response_solutions}")
    ctx.logger.info(f"homeworks {response_homeworks}")

    try:

        data_solutions = response_solutions.splitlines()[-1]
        ctx.logger.info(f"DATA_SOLUTIONS BACK 1 {data_solutions}")
        data_solutions = json.loads(data_solutions)

        ctx.logger.info(f"DATA_SOLUTIONS BACK {data_solutions}")

        data_homeworks = response_homeworks.splitlines()[-1]
        ctx.logger.info(f"DATA_HOMEWORKS BACK 1 {data_homeworks}")
        data_homeworks = json.loads(data_homeworks)
        
        ctx.logger.info(f"DATA_HOMEWORKS BACK {data_homeworks}")
        

        
        data_solutions = Problem.parse_obj(data_solutions)
        data_homeworks = Problem.parse_obj(data_homeworks)

        ctx.logger.info(f"WTF {data_solutions}")
        ctx.logger.info(f"WTF {data_homeworks}")

        final_data = Problems(solutions= data_solutions,homeworks= data_homeworks)
       
        ctx.logger.info(f"FINAL DATA {final_data}")

        return final_data
    except Exception as ex:
        ctx.logger.exception(f"An error occurred retrieving data from the AI model: {ex}")
        return Error(text="Sorry, I wasn't able to answer your request this time. Feel free to try again.")

# Message handler for data requests sent to this agent
@agent.on_message(model=Request)
async def handle_request(ctx: Context, sender: str, request: Request):
    ctx.logger.info(f"Got request from")
    response = get_data(ctx, request.solution, request.homework)
    sender = "agent1qdr7vvlmy42ngfxv2gac0zmqsjmkjyc38g0e493q7nc7f669an5w75lkswt"
    await ctx.send(sender, response)
    