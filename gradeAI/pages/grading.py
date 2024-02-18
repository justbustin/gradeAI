from gradeAI.templates import template
import os
from pathlib import Path
from typing import List
from google.cloud import storage
import json

import reflex as rx



class PDFViewer(rx.Component):
    """A component to render a PDF file in an iframe."""

    # Assuming Reflex uses a similar approach to React for specifying attributes
    def render(self):
        return rx.html(
            "<iframe src='http://localhost:3000/118.pdf' width='100%' height='500px' />",
            width="100em"
        )
    
def download_and_load_json(bucket_name="test_data_bucket_ocr", source_blob_name="score/hw1/grades_hw1.json"):
    """
    Downloads a blob from the bucket, loads the JSON content, and deletes the file.

    :param bucket_name: str. Name of the GCS bucket.
    :param source_blob_name: str. Name of the blob to download.
    :return: The loaded JSON object.
    """
    storage_client = storage.Client.from_service_account_json('gradeAI/pages/amazing-city-414621-61f39de69c52.json')
    temp_file_name = f"temp_{source_blob_name.replace('/', '_')}"
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(source_blob_name)
    blob.download_to_filename(temp_file_name)
    with open(temp_file_name, 'r') as f:
        data = json.load(f)
    os.remove(temp_file_name)

    return data

@template(route="/grading", title="Grading")
def grading() -> rx.Component:
    student_grades = download_and_load_json(),
    print(22, student_grades),
    test = []
    test.append({"value": 9.6, "timestamp": "2024-02-18", "confidence": "88.9", "details": "BLAH BLAH BLAH BLAH", "notes": "If you don't like a test prompt, you can get a different (random) prompt with the button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox on the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker."})
    test.append({"value": 5.3, "timestamp": "2024-02-18", "confidence": "99.99", "details": "BLAH BLAH BLAH BLAH", "notes": "YAYYYY, you can get a different (random) prompt with the button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox on the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker."})
    print(test)
    return rx.vstack(
        rx.hstack(
            PDFViewer(),
            rx.vstack(
                rx.text("Summary", font_weight=500, font_size="1.4em"),
                rx.text((test[0]["notes"])),
                rx.text("Score (Out of 10)", font_weight=500, font_size="1.4em"),
                rx.text((test[0]["value"])),
                rx.text("Confidence", font_weight=500, font_size="1.4em"),
                rx.text((test[0]["confidence"])),
                rx.text("Detailed Notes", font_weight=500, font_size="1.4em"),
                rx.text((test[0]["details"])),
            ),
        ),
        width="100%"
    )