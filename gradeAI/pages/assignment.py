from gradeAI.templates import template
import os
from pathlib import Path
from typing import List

import reflex as rx


@template(route="/assignment", title="Assignment")
def assignment() -> rx.Component:
    return rx.vstack(
        rx.text("Assignments", font_weight=500, font_size="1.4em", margin_bottom="0em"),
        rx.hstack(
            rx.text("Name"),
            rx.spacer(),
            rx.text("Status", margin_left="1.1em"),
            rx.spacer(),
            rx.text("Date Posted", margin_left="2.8em"),
            rx.spacer(),
            rx.text("Submitted"),
            width="100%",
        ),
        rx.divider(height="0.15em"),
        rx.vstack(
            rx.hstack(
                rx.text("Homework 5"),
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
                rx.text("Homework 4"),
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
                rx.text("Homework 3"),
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
                rx.text("Homework 2"),
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
                rx.text("Homework 1"),
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
        rx.text("Exams", margin_top="2em", font_weight=500, font_size="1.4em", margin_bottom="0em"),
        rx.hstack(
            rx.text("Name"),
            rx.spacer(),
            rx.text("Status", margin_left="1em"),
            rx.spacer(),
            rx.text("Date Posted", margin_left="2.7em"),
            rx.spacer(),
            rx.text("Submitted"),
            width="100%",
        ),
        rx.divider(height="0.15em"),
        rx.vstack(
            rx.hstack(
                rx.text("Midterm"),
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