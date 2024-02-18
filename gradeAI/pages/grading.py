from gradeAI.templates import template
import os
from pathlib import Path
from typing import List

import reflex as rx



class PDFViewer(rx.Component):
    """A component to render a PDF file in an iframe."""

    # Assuming Reflex uses a similar approach to React for specifying attributes
    def render(self):
        return rx.html(
            "<iframe src='http://localhost:3000/hw2.pdf' width='100%' height='500px' />"
        )

@template(route="/grading", title="Grading")
def grading() -> rx.Component:
    return rx.vstack(
        PDFViewer(),
    )