from mnemonic import Mnemonic
from uagents import Agent, Context, Model
from typing import List
import fitz
import docx2txt
import os
from google.cloud import storage
import tempfile
import base64
import json

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r"amazing-city-414621-61f39de69c52.json"


class Message(Model):
    message: str
    text_data_pdf: str
    image_data_pdf: List[str]
    text_data_word: str
    rubric_data_text: str
    # image_data_word: List[bytes]


def generate_seed():
    mnemo = Mnemonic("english")
    words = mnemo.generate(strength=256)
    seed = mnemo.to_seed(words, passphrase="TreeHacks2024")
    return seed


# mnemonic = generate_seed()
# print(mnemonic)
# Look in mnemonic_seed text file

mnemonic = b'\x8b\xa9\x88pO7\x96\xca\x13\x03\x0fSK\x16H<\xd6y+K\xbf\ty\x16\xc7\xeca\x84\x94\x182\x15*\xdb\x04O\x97\xfaO\xf2\xa7\x99v\xba\xf3\xe8B\xc9>1\x87\x8e\xe46d\xd5\x11RH\xad\xe3si\xf9'
mnemonic = str(mnemonic)
# trigger_agent = Agent(name="AI Pipeline Initiation", seed=str(mnemonic))

# print(f"Your agent's address is: {Agent(seed=str(mnemonic)).address}")
agent_mailbox_key = "aad91229-0694-4cef-934f-8b77757d384e"

trigger_agent = Agent(name="AI Pipeline Initiation", seed=str(mnemonic),
                      mailbox=f"{agent_mailbox_key}@https://agentverse.ai", )

reciever_address = "agent1qwez6cez0d7vycves9cm6w9dw9ecgjy3xwmrdalgrpc3cgg7pya05358m0e"


@trigger_agent.on_event("startup")
async def initiate(ctx: Context):
    ctx.logger.info(f'{ctx.name}')


def read_pdf_from_gcs(bucket_name, source_blob_name):
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(source_blob_name)

    # Use tempfile.NamedTemporaryFile to create a temp file that is compatible with your OS
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file_path = temp_file.name
        blob.download_to_filename(temp_file_path)

    # Initialize a variable to store text and a list to store images
    all_text = ""
    images_data = []

    # Read the PDF content
    doc = fitz.open(temp_file_path)
    for page_num, page in enumerate(doc):
        # Extract text and accumulate it
        text = page.get_text()
        all_text += f"Text on Page {page_num + 1}:\n{text}\n"

        # Extract images and store them in the list
        image_list = page.get_images(full=True)
        for img in image_list:
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            base64_image_string = base64.b64encode(image_bytes).decode('utf-8')
            # Append the image bytes to the list
            images_data.append(base64_image_string)

    doc.close()

    # Return both the accumulated text and the list of images
    return all_text, images_data


def process_word_from_gcs_and_extract_text_images(bucket_name, source_blob_name):
    """Download Word document from GCS, extract text, and save images."""
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(source_blob_name)
    file_content = blob.download_as_bytes()

    # Setup temporary directory for the document and images
    with tempfile.TemporaryDirectory() as temp_dir:
        doc_path = os.path.join(temp_dir, "temp_doc.docx")
        images_dir = os.path.join(temp_dir, "images")
        os.makedirs(images_dir, exist_ok=True)

        # Write the downloaded content to a temp file
        with open(doc_path, "wb") as doc_file:
            doc_file.write(file_content)

        # Process the document with docx2txt
        text = docx2txt.process(doc_path, images_dir)

    # At this point, text is extracted, and images are saved in images_dir
    # You can further process images or text as needed
    return text, images_dir



RECEIVER_ADDRESS = "agent1qwez6cez0d7vycves9cm6w9dw9ecgjy3xwmrdalgrpc3cgg7pya05358m0e"


@trigger_agent.on_interval(period=60)
async def data_pipelining(ctx: Context):
    ctx.logger.info(f'Sending Data')

    bucket_name = "test_data_bucket_ocr"
    source_blob_name = r"pdf/61 hw2.pdf"
    pdf_text, pdf_images_list = read_pdf_from_gcs(bucket_name, source_blob_name)


    bucket_name = "test_data_bucket_ocr"
    source_blob_name = "word/Report.docx"
    word_text, word_images_list = process_word_from_gcs_and_extract_text_images(bucket_name, source_blob_name)

    bucket_name = "test_data_bucket_ocr"
    source_blob_name = r"rubrics/Homework2-solutions (1).pdf"
    rubrics_text, rubrics_pdf_images_list = read_pdf_from_gcs(bucket_name, source_blob_name)

    await ctx.send(RECEIVER_ADDRESS, Message(message="HW #2 Grading Word + PDF", text_data_pdf=pdf_text,
                                             image_data_pdf=pdf_images_list, text_data_word=word_text, rubric_data_text=rubrics_text))

class Data(Model):
    value: float
    timestamp: str
    confidence: float
    details: str
    notes: str

class DataAll(Model):
    grades: List[Data]

def data_to_dict(data):
    # Convert a single Data instance to dict
    # print(type(data[1][0]))
    # print(data[1][0])

    return {
        "value": data[1][0].value,
        "timestamp": str(data[1][0].timestamp),  # Convert datetime to string if necessary
        "confidence": data[1][0].confidence,
        "details": data[1][0].details,
        "notes": data[1][0].notes
    }

def dataall_to_dict(data_all):
    # Assuming DataAll contains a list of Data objects
    return [data_to_dict(data) for data in data_all]

@trigger_agent.on_message(model=DataAll)
async def handle_data(ctx: Context, sender: str, data: DataAll):
    ctx.logger.info(f"Got response from AI model agent: {data}")

    # Convert DataAll to a list of dicts
    grades = dataall_to_dict(data)  # Adjust this line based on the actual structure of DataAll

    # Now you can serialize it to JSON
    grades_json = json.dumps(grades, indent=4)

    # Filename for the JSON data
    filename = 'grades_hw1.json'

    # Write the JSON string to a file
    with open(filename, 'w') as file:
        file.write(grades_json)

    try:
        storage_client = storage.Client.from_service_account_json('amazing-city-414621-61f39de69c52.json')
        bucket = storage_client.bucket("test_data_bucket_ocr")

        blob_name = f"score/hw1/{filename}"  # Corrected blob name
        blob = bucket.blob(blob_name)
        blob.upload_from_filename(filename)  # Changed to upload from filename

        # Delete the file after upload
        os.remove(filename)

        ctx.logger.info(f"{filename} has been uploaded to GCP and deleted locally.")  # Using logger instead of print
    except Exception as e:
        ctx.logger.error(f"Failed to upload {filename} to GCP: {e}")


if __name__ == "__main__":
    trigger_agent.run()
