from flask import Flask, jsonify
from buisnesslayer.LightServiceImpl import LightServiceImpl
from buisnesslayer.MotorServiceImpl import MotorServiceImpl
from buisnesslayer.SensorServiceImpl import SensorServiceImpl
import jsonpickle
import RPi.GPIO as GPIO
import threading
from flask_cors import cross_origin

app = Flask(__name__)
Forward = 17
Backward = 22

temperature_queue = []
motor_running = False
motorService = MotorServiceImpl(motor_running)
lightService = LightServiceImpl()
sensorService = SensorServiceImpl()



#Get all lights
@app.route('/lights', methods=['GET'])
@cross_origin()
def get_lights():
    '''resp = {
        'light1': jsonpickle.encode(LightServiceImpl.led1),
        'light2': jsonpickle.encode(LightServiceImpl.led2),
        'light3': jsonpickle.encode(LightServiceImpl.led3)
    }
    temp = getAllLights()
    print(temp)
    '''
    return lightService.getAllLights()

#toggle single light
@app.route('/lights/toggle/<identifier>', methods=['GET'])
@cross_origin()
def toggle_light(identifier):
    return jsonpickle.encode(lightService.toggleLightStatus(identifier))


@app.route('/')
@cross_origin()
def index():
    return

#Turn Fan on
@app.route('/fan/start', methods=['GET'])
@cross_origin()
def start_motor():
    motorService.start_motor_thread()
    return "Motor started"

@app.route('/fan/stop', methods=['GET'])
@cross_origin()
def stop_motor():
    motorService.stop_motor_thread()
    return "Motor stopped"
    
#cleanup pins
@app.route('/cleanup', methods=['POST'])
@cross_origin()
def shutdown():
    motorService.cleanup()
    lightService.cleanup()
    return "Pins cleaned up"
#retreive temperature
@app.route('/temp', methods=['GET'])
@cross_origin()
def sensor():
    return jsonify(sensorService.getSensorValue())

@app.route('/collect', methods=['GET'])
@cross_origin()
def collect():
    sensorService.collectData()
    return "Collecting"

if __name__ == '__main__':
    app.run()
    
    '''
    lightService = LightServiceImpl()
    motorService = MotorServiceImpl(motor_running)
    sensorService = SensorServiceImpl()
    '''
    

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





