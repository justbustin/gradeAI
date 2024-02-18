from gradeAI.templates import template
import os
from pathlib import Path
from typing import List
from google.cloud import storage

import reflex as rx

class UploadStateModal(rx.State):
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
        storage_client = storage.Client.from_service_account_json("gradeAI/pages/amazing-city-414621-61f39de69c52.json")
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


@template(route="/assignment", title="Assignment")
def assignment() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.text("Assignments", font_weight=500, font_size="1.4em", margin_bottom="0em"),
            rx.dialog.root(
                rx.dialog.trigger(rx.chakra.image(src="https://www.svgrepo.com/show/507821/plus-circle.svg", width="1.3em", height="1.3em", margin_top="0.5em")),
                rx.dialog.content(
                    rx.dialog.title("Create a New Assignment", font_family="Work Sans"),
                    rx.dialog.description(
                        rx.divider(margin_bottom="1em"),
                        rx.text("Assignment Name", font_family="Work Sans", font_weight=500, margin_bottom="0.3em"),
                        rx.input(placeholder="Enter assignment name...",),
                        rx.box(height="2em"),
                        rx.text("Due Date", font_family="Work Sans", font_weight=500, margin_bottom="0.3em"),
                        rx.input(placeholder="Enter due date (MM/DD/YEAR)...",),
                        rx.box(height="2em"),
                        rx.text("Upload Rubric", font_family="Work Sans", font_weight=500, margin_bottom="0.3em"),
                        rx.upload(
                            rx.vstack(
                                rx.button(
                                    "Select File(s)",
                                    height="70px",
                                    width="200px",
                                    color="black",
                                    bg="white",
                                    border=f"1px solid black",
                                ),
                                rx.flex(
                                    rx.text(
                                        "Drag and drop files here or click to select files",
                                        height="100px",
                                        width="200px",
                                        align="center"
                                    ),
                                    align="center"
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
                            border="1px solid black",
                            padding="2em",
                        ),
                        rx.flex(
                            rx.button(
                                "Create",
                                on_click=UploadStateModal.handle_upload(
                                    rx.upload_files(
                                        upload_id=upload_id,
                                        on_upload_progress=UploadStateModal.on_upload_progress
                                    )
                                ),
                                bg="#3A937D",
                            ),
                            align="center",
                            margin_left="14.3em",
                            margin_top="1.5em",
                        ),
                    align="center",
                    ),
                        rx.dialog.close(
                            rx.button("Close Dialog", size="3"),
                            margin_top="10em"
                        ),
                    ),
                ),
            ),
        rx.hstack(
            rx.text("Name"),
            rx.spacer(),
            rx.text("Status", margin_left="2.6em"),
            rx.spacer(),
            rx.text("Date Posted", margin_left="2.7em"),
            rx.spacer(),
            rx.text("Submitted"),
            width="100%",
        ),
        rx.divider(height="0.15em"),
        rx.vstack(
            rx.hstack(
                rx.hstack(
                    rx.text("Homework 5"),
                    rx.chakra.link(
                        rx.chakra.image(src="https://www.svgrepo.com/show/510970/external-link.svg", width="1em", height="1em", margin_top="0.28em"),
                        href="/grading"
                    )
                ),
                rx.spacer(),
                rx.hstack(
                    rx.text("Not Reviewed"),
                    rx.chakra.image(src="https://www.svgrepo.com/show/407314/red-circle.svg", width="0.8em", height="0.8em", marginTop="0.35em"),
                ),
                rx.spacer(),
                rx.text("February 25, 2003"),
                rx.spacer(),
                rx.text("268/271"),
                width="100%",
            ),
            rx.hstack(
                rx.hstack(
                    rx.text("Homework 4"),
                    rx.chakra.image(src="https://www.svgrepo.com/show/510970/external-link.svg", width="1em", height="1em", margin_top="0.28em")
                ),
                rx.spacer(),
                rx.hstack(
                    rx.text("Not Reviewed"),
                    rx.chakra.image(src="https://www.svgrepo.com/show/407314/red-circle.svg", width="0.8em", height="0.8em", marginTop="0.35em"),
                ),
                rx.spacer(),
                rx.text("February 18, 2023"),
                rx.spacer(),
                rx.text("267/271"),
                width="100%",
            ),
            rx.hstack(
                rx.hstack(
                    rx.text("Homework 3"),
                    rx.chakra.image(src="https://www.svgrepo.com/show/510970/external-link.svg", width="1em", height="1em", margin_top="0.28em")
                ),
                rx.spacer(),
                rx.hstack(
                    rx.text("Reviewed"),
                    rx.chakra.image(src="https://www.svgrepo.com/show/405751/green-circle.svg", width="0.8em", height="0.8em", marginTop="0.35em"),
                ),
                rx.spacer(),
                rx.text("February 11, 2023"),
                rx.spacer(),
                rx.text("270/271"),
                width="100%",
            ),
            rx.hstack(
                rx.hstack(
                    rx.text("Homework 2"),
                    rx.chakra.image(src="https://www.svgrepo.com/show/510970/external-link.svg", width="1em", height="1em", margin_top="0.28em")
                ),
                rx.spacer(),
                rx.hstack(
                    rx.text("Reviewed"),
                    rx.chakra.image(src="https://www.svgrepo.com/show/405751/green-circle.svg", width="0.8em", height="0.8em", marginTop="0.35em"),
                ),
                rx.spacer(),
                rx.text("February 2, 2023"),
                rx.spacer(),
                rx.text("252/271"),
                width="100%",
            ),
            rx.hstack(
                rx.hstack(
                    rx.text("Homework 1"),
                    rx.chakra.image(src="https://www.svgrepo.com/show/510970/external-link.svg", width="1em", height="1em", margin_top="0.28em")
                ),
                rx.spacer(),
                rx.hstack(
                    rx.text("Reviewed"),
                    rx.chakra.image(src="https://www.svgrepo.com/show/405751/green-circle.svg", width="0.8em", height="0.8em", marginTop="0.35em"),
                ),
                rx.spacer(),
                rx.text("January 26, 2023"),
                rx.spacer(),
                rx.text("271/271"),
                width="100%",
            ),
            width="100%",
        ),
        rx.hstack(
            rx.text("Exams", margin_top="2em", font_weight=500, font_size="1.4em", margin_bottom="0em"),
            rx.dialog.root(
                rx.dialog.trigger(rx.chakra.image(src="https://www.svgrepo.com/show/507821/plus-circle.svg", width="1.3em", height="1.3em", margin_top="3.3em")),
                rx.dialog.content(
                    rx.dialog.title("Create a New Exam", font_family="Work Sans"),
                    rx.dialog.description(
                        rx.divider(margin_bottom="1em"),
                        rx.text("Exam Name", font_family="Work Sans", font_weight=500, margin_bottom="0.3em"),
                        rx.input(placeholder="Enter exam name...",),
                        rx.box(height="2em"),
                        rx.text("Due Date", font_family="Work Sans", font_weight=500, margin_bottom="0.3em"),
                        rx.input(placeholder="Enter due date (MM/DD/YEAR)...",),
                        rx.box(height="2em"),
                        rx.text("Upload Rubric", font_family="Work Sans", font_weight=500, margin_bottom="0.3em"),
                        rx.upload(
                            rx.vstack(
                                rx.button(
                                    "Select File(s)",
                                    height="70px",
                                    width="200px",
                                    color="black",
                                    bg="white",
                                    border=f"1px solid black",
                                ),
                                rx.flex(
                                    rx.text(
                                        "Drag and drop files here or click to select files",
                                        height="100px",
                                        width="200px",
                                        align="center"
                                    ),
                                    align="center"
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
                            border="1px solid black",
                            padding="2em",
                        ),
                        rx.flex(
                            rx.button(
                                "Create",
                                on_click=UploadStateModal.handle_upload(
                                    rx.upload_files(
                                        upload_id=upload_id,
                                        on_upload_progress=UploadStateModal.on_upload_progress
                                    )
                                ),
                                bg="#3A937D",
                            ),
                            align="center",
                            margin_left="14.3em",
                            margin_top="1.5em",
                        ),
                    align="center",
                    ),
                        rx.dialog.close(
                            rx.button("Close Dialog", size="3"),
                            margin_top="10em"
                        ),
                    ),
                ),
            ),
        rx.hstack(
            rx.text("Name"),
            rx.spacer(),
            rx.text("Status", margin_left="0.8em"),
            rx.spacer(),
            rx.text("Date Posted", margin_left="2.7em"),
            rx.spacer(),
            rx.text("Submitted"),
            width="100%",
        ),
        rx.divider(height="0.15em"),
        rx.vstack(
            rx.hstack(
                rx.hstack(
                    rx.text("Midterm"),
                    rx.chakra.image(src="https://www.svgrepo.com/show/510970/external-link.svg", width="1em", height="1em", margin_top="0.28em")
                ),
                rx.spacer(),
                rx.hstack(
                    rx.text("Not Reviewed"),
                    rx.chakra.image(src="https://www.svgrepo.com/show/407314/red-circle.svg", width="0.8em", height="0.8em", marginTop="0.35em"),
                ),
                rx.spacer(),
                rx.text("February 25, 2003"),
                rx.spacer(),
                rx.text("268/271"),
                width="100%",
            ),
            width="100%",
        ),
        rx.vstack(
            rx.box(
                height="40vh"
            ),
        ),
    )