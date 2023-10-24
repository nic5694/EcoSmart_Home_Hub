
class SensorServiceImpl(SensorService):
    def __init__(self):
        self.sensor1 = Sensor(1, "Kitchen Temperature", SensorType.TEMPERATURE, 0.0)
        self.sensor2 = Sensor(2, "Kitchen Mouvement", SensorType.MOTION, 0.0)

        self.Sensors = {
            self.sensor1.get_sensor_identifier(): self.sensor1,
            self.sensor2.get_sensor_identifier(): self.sensor2
        }

    def getSensorValue(self, sensorIdentifier: str):
        if sensorIdentifier in self.Sensors:
            return self.Sensors[sensorIdentifier].get_value()
