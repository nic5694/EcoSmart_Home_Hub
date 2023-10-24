from dataclasses import dataclass
import uuid

@dataclass
class Light:
    def __init__(self, id: int, name: str, state: LightState, brightness: float, color: str, ledPinNum: int):
        self.id = id
        self.lightIdentifier = str(uuid.uuid4())
        self.name = name
        self.state = state
        self.brightness = brightness
        self.color = color
        self.led = LED(ledPinNum)

    def get_light_identifier(self):
        return self.lightIdentifier
    def set_light_identifier(self, lightIdentifier):
        self.lightIdentifier = lightIdentifier
    def get_name(self):
        return self.name
    def set_name(self, name):
        self.name = name
    def get_state(self):
        return self.state
    def set_state(self, state):
        self.state = state
    def get_brightness(self):
        return self.brightness
    def set_brightness(self, brightness):
        self.brightness = brightness
    def get_color(self):
        return self.color
    def set_color(self, color):
        self.color = color
