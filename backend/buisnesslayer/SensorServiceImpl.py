from datalayer.Sensor import Sensor
from flask import Flask, jsonify
import Adafruit_DHT
from datetime import datetime

class SensorServiceImpl():
    def __init__(self):
        self.tempSensor = Sensor(1, "Kitchen Temperature", "TEMPERATURE", 14)
        self.count = 0

    def collectData(self):
        #getting pin number from the sensor object
        pinNum = self.tempSensor.getSensorPin()
        #opening the data file
        f = open("data.txt", "a")
        #collecting data
        humidity, temperature = Adafruit_DHT.read_retry(Adafruit_DHT.DHT11, pinNum)
        #create the json object
        s = {"id":self.count,"temperature":temperature, "time":datetime.now().strftime("%H:%M:%S")}
        #write to the data file
        f.write(str(s))
        f.write("\n")
        #close data file
        f.close()
        self.count+=1
        
    '''
    def getSensorValue(self):
        print("Received request in the sensor value")
        pinNum = self.tempSensor.getSensorPin()
        # setting up the sensor to collect humdity and temperature
        humidity, temperature = Adafruit_DHT.read_retry(Adafruit_DHT.DHT11, pinNum)
        if humidity is not None and temperature is not None:
            print('Temp={0:0.1f}*C  Humidity={1:0.1f}%'.format(temperature, humidity))
            return {"humidity": humidity, "temperature":temperature}
        else:
            print('Failed to get reading. Try again!')
        return {"tem":temperature, "humidity": humidity}
        '''
