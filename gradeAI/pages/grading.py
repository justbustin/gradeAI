from gradeAI.templates import template
import os
from pathlib import Path
from typing import List

import reflex as rx

class PDFViewer(rx.Component):
    library = "react-pdf"
    tag = "Document"
    file: rx.Var[str]

    def on_document_load_success(self, num_pages: int) -> None:
        self.set_state(num_pages=num_pages)

    def get_event_triggers(self) -> dict[str, any]:
        return {
            **super().get_event_triggers(),
            "onLoadSuccess": self.on_document_load_success,
        }

pdf_viewer = PDFViewer.create

class PDFViewerState(rx.State):
    file: str = "https://jade-lindie-65.tiiny.site"
    num_pages: int = 0
    page_number: int = 1

@template(route="/grading", title="Grading")
def grading() -> rx.Component:
    return rx.vstack(
        pdf_viewer(
            file=PDFViewerState.file
        ),
        rx.text(
            f"Page {PDFViewerState.page_number} of {PDFViewerState.num_pages}"
        )
    )