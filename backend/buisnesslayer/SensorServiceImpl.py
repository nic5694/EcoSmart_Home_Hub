from datalayer.Sensor import Sensor
import Adafruit_DHT

class SensorServiceImpl():
    def __init__(self):
        self.tempSensor = Sensor(1, "Kitchen Temperature", "TEMPERATURE", 14)

    def getSensorValue(self):
        print("Received request in the sensor value")
        humidity, temperature = Adafruit_DHT.read_retry(Adafruit_DHT.DHT11, self.tempSensor.getSensorPin())
        if humidity is not None and temperature is not None:
            print('Temp={0:0.1f}*C  Humidity={1:0.1f}%'.format(temperature, humidity))
        else:
            print('Failed to get reading. Try again!')
        return {"temperature":temperature, "humidity": humidity}
