from datalayer.Sensor import Sensor
from flask import Flask, jsonify
import Adafruit_DHT
from datetime import datetime
import time
import threading
import json

class SensorServiceImpl():
    def __init__(self):
        self.tempSensor = Sensor(1, "Kitchen Temperature", "TEMPERATURE", 14)
        self.count = 0
        
    def start_sensor_thread(self):
        sensor_thread = threading.Thread(target=self.run_sensor_thread)
        sensor_thread.start()
    def run_sensor_thread(self):
        print("Motor thread started")
        while True:
            self.collectData(3600)
    def cleanup(self):
        GPIO.cleanup()
    def collectData(self, delay):
        # getting pin number from the sensor object
        pinNum = self.tempSensor.getSensorPin()
        # opening the data file
        f = open("temp.txt", "a")
        # collecting data
        humidity, temperature = Adafruit_DHT.read_retry(Adafruit_DHT.DHT11, pinNum)
        
        # create the json object
        temp = {"hour": datetime.now().replace(minute=0, second=0, microsecond=0).strftime("%H:%M"), "temp": temperature}
        humid = {"hour": datetime.now().replace(minute=0, second=0, microsecond=0).strftime("%H:%M"), "temp": humidity}
        # convert dictionary to JSON string
        temp_json = json.dumps(temp)
        temp_humid = json.dumps(humid)
        
        print("Wrote to file " + temp_json)
        
        # write to the data file
        f.write(temp_json)
        f.write("\n")
        # close data file
        f.close()
        h = open("hum.txt", "a")
        h.write(temp_humid)
        h.write("\n")
        h.close()
        time.sleep(delay)
        
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
    def read_json_file(self, file_path):
        # Initialize an empty list to store JSON objects
        json_objects = []

        try:
            # Open the file in read mode
            with open(file_path, 'r') as file:
                # Read the file content and split it based on newline characters
                file_content = file.read()
                json_strings = file_content.split('\n')

                # Parse each JSON object and add it to the list
                for json_str in json_strings:
                    if json_str.strip():  # Skip empty lines
                        json_object = json.loads(json_str)
                        json_objects.append(json_object)

        except FileNotFoundError:
            print(f"File not found: {file_path}")

        return json_objects


