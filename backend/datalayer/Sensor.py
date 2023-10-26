import SensorType
import uuid


class Sensor:
    def __init__(self, id:int, name: str, type: SensorType, value: float):
        self.id = id
        self.sensorIdentifier = str(uuid.uuid4())
        self.name = name
        self.type = type
        self.value = value

    def get_sensor_identifier(self):
        pass
