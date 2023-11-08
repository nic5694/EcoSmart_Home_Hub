from flask import Flask, jsonify
from buisnesslayer.LightServiceImpl import LightServiceImpl
from buisnesslayer.MotorServiceImpl import MotorServiceImpl
from buisnesslayer.SensorServiceImpl import SensorServiceImpl
import jsonpickle
import RPi.GPIO as GPIO
import threading



app = Flask(__name__)
Forward = 17
Backward = 22

temperature_queue = []



#Get all lights
@app.route('/lights', methods=['GET'])
def get_lights():
    resp = {
        'light1': jsonpickle.encode(lightService.led1),
        'light2': jsonpickle.encode(lightService.led2),
        'light3': jsonpickle.encode(lightService.led3)
    }
    return resp

#toggle single light
@app.route('/lights/toggle/<identifier>', methods=['GET'])
def toggle_light(identifier):
    return jsonpickle.encode(lightService.toggleLightStatus(identifier))


@app.route('/')
def index():
    return

#Turn Fan on
@app.route('/fan/start', methods=['GET'])
def start_motor():
    motorService.start_motor_thread()
    return "Motor started"

@app.route('/fan/stop', methods=['GET'])
def stop_motor():
    motorService.stop_motor_thread()
    return "Motor stopped"
    
#cleanup pins
@app.route('/cleanup', methods=['POST'])
def shutdown():
    motorService.cleanup()
    lightService.cleanup()
    return "Pins cleaned up"
#retreive temperature
@app.route('/temp', methods=['GET'])
def sensor():
    return jsonify(sensorService.getSensorValue())


if __name__ == '__main__':
    motor_running = False
    lightService = LightServiceImpl()
    motorService = MotorServiceImpl(motor_running)
    sensorService = SensorServiceImpl()
    app.run()

'''
@app.teardown_appcontext
def teardown(exception):
    motorService.cleanup();

@app.route('/motor/start', methods=['GET'])
def start_motor():
   # global motor_running
    lightService.start_motor_thread()
    return "Motor started"
@app.route('/motor/stop', methods=['GET'])
def stop_motor():
   # global motor_running
    print("Testing")
    lightService.stop_motor_thread()
    return "Motor Stopped"
    

@app.route('/motor', methods=['GET'])
def motor():
    lightService.forward(1)
    return "motor turn"

'''

# @app.route('/lights', methods=['GET'])
# def get_lights():
#     lights = lightService.getAllLights()
#     return jsonify(lights)





