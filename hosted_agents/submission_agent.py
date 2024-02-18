
# RUN ON AGENTVERSE
# GRADE SUBMISSION AGENT IN CHARGE OF SENDING ALL PROCESSED DATA (GRADES) TO LOCAL AGENT FOR SAVE TO DB

LOCAL_AGENT_ADDRESS='agent1qvrynkgrn2fkqthehxjw67l698hduzxuede8sfpspfwj60zl0l9lq34fw09'

class Data(Model):
    value: float
    timestamp: str
    confidence: float
    details: str
    notes: str

class DataAll(Model):
    grades: List[Data]



# Message handler for data requests sent to this agent
@agent.on_message(model=DataAll)
async def handle_data(ctx: Context, sender: str, data: DataAll):
    ctx.logger.info(f"Got response from AI model agent: {data}")
    
    await ctx.send(LOCAL_AGENT_ADDRESS, data)

