from gradeAI.templates import template
import reflex as rx

class CalendlyWidget(rx.Component):
    """A component to embed an interactive Calendly widget."""

    def render(self):
        # Your specific Calendly link with Zoom integration
        calendly_link = "https://calendly.com/arnav0422"
        # HTML to load Calendly's script and display the widget
        return rx.html(f"""
            <div id="calendly-widget-container"></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
            <script type="text/javascript">
                Calendly.initInlineWidget({{
                    url: '{calendly_link}',
                    parentElement: document.getElementById('calendly-widget-container'),
                    prefill: {{}},
                    utm: {{}}
                }});
            </script>
        """)

@template(route="/schedule", title="Schedule Meeting")
def schedule_meeting() -> rx.Component:
    return rx.vstack(
        CalendlyWidget(),
    )
