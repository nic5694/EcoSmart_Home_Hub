
import uuid
import RPi.GPIO as GPIO

class Sensor:
    def __init__(self, id:int, name: str, sensorType: str, pin: int):
        self.id = id
        self.sensorIdentifier = str(uuid.uuid4())
        self.name = name
        self.type = sensorType
        self.pin = pin
    def getSensorPin(self):
        return self.pin
