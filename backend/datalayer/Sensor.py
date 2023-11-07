import SensorType
import uuid
import RPi.GPIO as GPIO

class Sensor:
    def __init__(self, id:int, name: str, type: SensorType, value: float, pin: int):
        self.id = id
        self.sensorIdentifier = str(uuid.uuid4())
        self.name = name
        self.type = type
        self.value = value
        self.pin = pin
        

    def get_sensor_identifier(self):
        pass
