"""The home page of the app."""

from gradeAI import styles
from gradeAI.templates import template
from typing import List

import reflex as rx

class ForeachState(rx.State):
    pageRoute: List[str] = [
        "/dashboard",
        "/settings",
    ],
    className: List[str] = [
        "MATH61: Discrete Math"
        "LIFE101: Touching Grass"
        "LIFE144: Finding a Partner For You"
        "LIFE188: Shower Techniques"
        "LIFE31: Intro to Leaving Your Room"
        "MATH203: Graduate Topology"
    ]

def classCard(className: str):
    return rx.card(
        rx.chakra.link(
            rx.flex(
                rx.avatar(src="/reflex_banner.png"),
                rx.box(
                    rx.heading("Quick Start"),
                    rx.text(
                        className
                    ),
                ),
                spacing="2",
            ),
            # href={route}
        ),
        as_child=True,
    )



@template(route="/", title="Home", image="/github.svg")
def index() -> rx.Component:
    """The home page.

    Returns:
        The UI for the home page.

    """
    return rx.box(
        rx.grid(
            rx.card(
                rx.chakra.link(
                    rx.flex(
                        rx.box(
                            rx.flex(
                                rx.image(src="calculator.svg", width='1.6em', height='1.6em', marginTop='0.7em', marginRight='0.3em', color="#cb997e"),
                                rx.box(
                                    rx.text("MATH 61", font_size="2em", font_weight="bold", font_family="Work Sans"),
                                ),
                            )
                        ),
                        rx.box(
                            rx.flex(
                                rx.image(src="friends.svg", width='2em', height='2em', marginTop='0.5em'),
                                rx.text(
                                    "271", marginTop='0.7em'
                                ),
                            )
                        ),
                        # spacing="8",
                        justify="between",
                    ),
                    rx.text(
                        "Introduction to Discrete Structures", marginLeft="0.2em", marginTop="-0.4em", font_family="Work Sans"
                    ),
                    rx.text("5 assignments, 1 Exam", marginLeft="0.2em", marginTop="-0.2em", font_family="Work Sans"),
                    rx.chakra.divider(marginTop="0.5em", width="45em", marginLeft="-10em"),
                    rx.image(src="wavyred.png", width="35em", height="12em", margin_top="-2em"),
                    href="/dashboard", 
                    text_decoration="none"
                ),
                as_child=True,
                height="40vh",
            ),
            rx.card(
                rx.chakra.link(
                    rx.flex(
                        rx.box(
                            rx.flex(
                                rx.image(src="shower.svg", width='1.6em', height='1.6em', marginTop='0.7em', marginRight='0.3em', color="#cb997e"),
                                rx.box(
                                    rx.text("LIFE 142", font_size="2em", font_weight="bold", font_family="Work Sans"),
                                ),
                            )
                        ),
                        rx.box(
                            rx.flex(
                                rx.image(src="friends.svg", width='2em', height='2em', marginTop='0.5em'),
                                rx.text(
                                    "400", marginTop='0.7em'
                                ),
                            )
                        ),
                        # spacing="8",
                        justify="between",
                    ),
                    rx.text(
                        "Shower Techniques", marginLeft="0.2em", marginTop="-0.4em", font_family="Work Sans"
                    ),
                    rx.text("0 assignments, 0 Exams", marginLeft="0.2em", marginTop="-0.2em", font_family="Work Sans"),
                    rx.chakra.divider(marginTop="0.5em", width="45em", marginLeft="-10em"),
                    rx.image(src="wavyorange.png", width="35em", height="12em", margin_top="-2em"),
                    href="/dashboard", 
                    text_decoration="none"
                ),
                as_child=True,
                height="40vh",
            ),
            rx.card(
                rx.chakra.link(
                    rx.flex(
                        rx.box(
                            rx.flex(
                                rx.image(src="couple.svg", width='1.6em', height='1.6em', marginTop='0.7em', marginRight='0.3em', color="#cb997e"),
                                rx.box(
                                    rx.text("LOVE 96", font_size="2em", font_weight="bold", font_family="Work Sans"),
                                ),
                            )
                        ),
                        rx.box(
                            rx.flex(
                                rx.image(src="friends.svg", width='2em', height='2em', marginTop='0.5em'),
                                rx.text(
                                    "69", marginTop='0.7em'
                                ),
                            )
                        ),
                        # spacing="8",
                        justify="between",
                    ),
                    rx.text(
                        "Introduction to Finding Love", marginLeft="0.2em", marginTop="-0.4em", font_family="Work Sans"
                    ),
                    rx.text("2 assignments, 0 Exams", marginLeft="0.2em", marginTop="-0.2em", font_family="Work Sans"),
                    rx.chakra.divider(marginTop="0.5em", width="45em", marginLeft="-10em"),
                    rx.image(src="wavyyellow.png", width="35em", height="12em", margin_top="-2em"),
                    href="/dashboard", 
                    text_decoration="none"
                ),
                as_child=True,
                height="40vh",
            ),
            rx.card(
                rx.chakra.link(
                    rx.flex(
                        rx.box(
                            rx.flex(
                                rx.image(src="house.svg", width='1.6em', height='1.6em', marginTop='0.7em', marginRight='0.3em', color="#cb997e"),
                                rx.box(
                                    rx.text("LIFE 112B", font_size="2em", font_weight="bold", font_family="Work Sans"),
                                ),
                            )
                        ),
                        rx.box(
                            rx.flex(
                                rx.image(src="friends.svg", width='2em', height='2em', marginTop='0.5em'),
                                rx.text(
                                    "115", marginTop='0.7em'
                                ),
                            )
                        ),
                        # spacing="8",
                        justify="between",
                    ),
                    rx.text(
                        "Leaving the House: Advanced Methods", marginLeft="0.2em", marginTop="-0.4em", font_family="Work Sans"
                    ),
                    rx.text("12 assignments, 2 Exams", marginLeft="0.2em", marginTop="-0.2em", font_family="Work Sans"),
                    rx.chakra.divider(marginTop="0.5em", width="45em", marginLeft="-10em"),
                    rx.image(src="wavygreen.png", width="35em", height="12em", margin_top="-2em"),
                    href="/dashboard", 
                    text_decoration="none"
                ),
                as_child=True,
                height="40vh",
            ),
            rx.card(
                rx.chakra.link(
                    rx.flex(
                        rx.box(
                            rx.flex(
                                rx.image(src="segment.svg", width='1.6em', height='1.6em', marginTop='0.7em', marginRight='0.3em', color="#cb997e"),
                                rx.box(
                                    rx.text("MATH 288", font_size="2em", font_weight="bold", font_family="Work Sans"),
                                ),
                            )
                        ),
                        rx.box(
                            rx.flex(
                                rx.image(src="friends.svg", width='2em', height='2em', marginTop='0.5em'),
                                rx.text(
                                    "43", marginTop='0.7em'
                                ),
                            )
                        ),
                        # spacing="8",
                        justify="between",
                    ),
                    rx.text(
                        "Graduate Geometric Topology", marginLeft="0.2em", marginTop="-0.4em", font_family="Work Sans"
                    ),
                    rx.text("1 assignments, 0 Exams", marginLeft="0.2em", marginTop="-0.2em", font_family="Work Sans"),
                    rx.chakra.divider(marginTop="0.5em", width="45em", marginLeft="-10em"),
                    rx.image(src="wavysage.png", width="35em", height="12em", margin_top="-2em"),
                    href="/dashboard", 
                    text_decoration="none"
                ),
                as_child=True,
                height="40vh",
            ),
           rx.card(
                rx.chakra.link(
                    rx.flex(
                        rx.box(
                            rx.flex(
                                rx.image(src="grass.svg", width='1.6em', height='1.6em', marginTop='0.7em', marginRight='0.3em', color="#cb997e"),
                                rx.box(
                                    rx.text("LIFE 101", font_size="2em", font_weight="bold", font_family="Work Sans"),
                                ),
                            )
                        ),
                        rx.box(
                            rx.flex(
                                rx.image(src="friends.svg", width='2em', height='2em', marginTop='0.5em'),
                                rx.text(
                                    "520", marginTop='0.7em'
                                ),
                            )
                        ),
                        # spacing="8",
                        justify="between",
                    ),
                    rx.text(
                        "Introduction to Touching Grass", marginLeft="0.2em", marginTop="-0.4em", font_family="Work Sans"
                    ),
                    rx.text("11 assignments, 1 Exam", marginLeft="0.2em", marginTop="-0.2em", font_family="Work Sans"),
                    rx.chakra.divider(marginTop="0.5em", width="45em", marginLeft="-10em"),
                    rx.image(src="wavysage.png", width="35em", height="12em", margin_top="-2em"),
                    href="/dashboard", 
                    text_decoration="none"
                ),
                as_child=True,
                height="40vh",
            ),
            columns="3",
            spacing="4",
            width="100%",
            border_radius="0em"
        ),
    )
