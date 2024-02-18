from gradeAI.templates import template
import os
from pathlib import Path
from typing import List

import reflex as rx


@template(route="/assignment", title="Assignment")
def assignment() -> rx.Component:
    return rx.vstack(
        rx.text("Assignments"),
        rx.hstack(
            rx.text("Name"),
            rx.text("Status"),
            rx.text("Date Posted"),
        ),
        rx.text("Exams"),
    )