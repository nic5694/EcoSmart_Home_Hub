from gpiozero import LED, Button
from Light import Light
from LightState import LightState

class LightServiceImpl(LightService):

    def __init__(self):
        self.led1 = Light(1, "Kitchen", LightState.OFF, 0.0, "white", 6)
        self.led2 = Light(2, "Living Room", LightState.OFF, 0.0, "white", 7)
        self.led3 = Light(3, "Bedroom", LightState.OFF, 0.0, "white", 8)

        # Create a dictionary to store the lights
        self.Lights = {
            self.led1.get_light_identifier(): self.led1,
            self.led2.get_light_identifier(): self.led2,
            self.led3.get_light_identifier(): self.led3
        }

    def getLightState(self, lightIdentifier: str):
        if lightIdentifier in self.Lights:
            return self.Lights[lightIdentifier].get_state()

    def toggleLightStatus(self, lightIdentifier: str):
        if lightIdentifier in self.Lights:
            if self.Lights[lightIdentifier].get_state() == LightState.ON:
                self.Lights[lightIdentifier].set_state(LightState.OFF)
                self.Lights[lightIdentifier].get_led().off()
            else:
                self.Lights[lightIdentifier].set_state(LightState.ON)
                self.Lights[lightIdentifier].get_led().on()
        return self.Lights[lightIdentifier].get_state()

    def setLightBrightness(self, lightIdentifier: str, brightness: float):
        if lightIdentifier in self.Lights:
            self.Lights[lightIdentifier].set_brightness(brightness)
            self.Lights[lightIdentifier].get_led().value = brightness
        return self.Lights[lightIdentifier].get_brightness()
