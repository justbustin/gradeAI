"""The dashboard page."""
from gradeAI.templates import template
import os
from pathlib import Path
from typing import List
from google.cloud import storage


import reflex as rx


class UploadState(rx.State):
    """The app state."""

    # Whether we are currently uploading files.
    is_uploading: bool

    # Progress visuals
    upload_progress: int

    @rx.var
    def files(self) -> list[str]:
        """Get the string representation of the uploaded files."""
        return [
            "/".join(p.parts[1:])
            for p in Path(rx.get_upload_dir()).rglob("*")
            if p.is_file()
        ]

    # async def handle_upload(self, files: List[rx.UploadFile]):
    #     """Handle the file upload."""
    #     # Iterate through the uploaded files.
    #     for file in files:
    #         upload_data = await file.read()
            # outfile = Path(rx.get_upload_dir()) / file.filename.lstrip("/")
            # outfile.parent.mkdir(parents=True, exist_ok=True)
            # outfile.write_bytes(upload_data)
            # print(22, outfile);
    async def handle_upload(self, files: List[rx.UploadFile]):
        """Handle the file upload asynchronously."""
        storage_client = storage.Client.from_service_account_json('amazing-city-414621-61f39de69c52.json')
        bucket = storage_client.bucket("test_data_bucket_ocr")

        for file in files:
            upload_data = await file.read()  # Asynchronously read file content

            # Synchronously upload the file to GCS
            blob = bucket.blob("rubrics/" + file.filename)  # Assuming file.filename is your desired blob name
            blob.upload_from_string(upload_data)

            print(f"File {file.filename} uploaded.")

        print("All files uploaded.")

    def on_upload_progress(self, prog: dict):
        print("Got progress", prog)
        if prog["progress"] < 1:
            self.is_uploading = True
        else:
            self.is_uploading = False
        self.upload_progress = round(prog["progress"] * 100)

    def cancel_upload(self, upload_id: str):
        self.is_uploading = False
        return rx.cancel_upload(upload_id)


color = "rgb(107,99,246)"
upload_id = "upload1"


@template(route="/dashboard", title="Dashboard")
def dashboard() -> rx.Component:
    return rx.vstack(
        rx.upload(
            rx.vstack(
                rx.button(
                    "Select File(s)",
                    height="70px",
                    width="200px",
                    color=color,
                    bg="white",
                    border=f"1px solid {color}",
                ),
                rx.text(
                    "Drag and drop files here or click to select files",
                    height="100px",
                    width="200px",
                ),
                rx.cond(
                    rx.selected_files(upload_id),
                    rx.foreach(
                        rx.selected_files(upload_id),
                        rx.text,
                    ),
                    rx.text("No files selected"),
                ),
                align="center",
            ),
            id=upload_id,
            border="1px dotted black",
            padding="2em",
        ),
        rx.hstack(
            rx.button(
                "Upload",
                on_click=UploadState.handle_upload(
                    rx.upload_files(
                        upload_id=upload_id,
                        on_upload_progress=UploadState.on_upload_progress
                    )
                ),
            ),
        ),
        rx.heading("Files:"),

        rx.cond(
            UploadState.is_uploading,
            rx.text("Uploading... ", rx.link("cancel", on_click=UploadState.cancel_upload(upload_id))),
        ),
        rx.progress(value=UploadState.upload_progress),
        rx.vstack(
           rx.foreach(UploadState.files, lambda file: rx.link(file, href=rx.get_upload_url(file)))
        ),
        align="center",
    )