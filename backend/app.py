from flask import Flask
from buisnesslayer.LightServiceImpl import LightServiceImpl
from buisnesslayer.MotorServiceImpl import MotorServiceImpl
import jsonpickle
import RPi.GPIO as GPIO
import threading


app = Flask(__name__)
Forward = 17
Backward = 22



@app.route('/lights', methods=['GET'])
def get_lights():
    # lights = lightService.getAllLights()
    # light = lightService.getOneLight()
    # print(jsonify(lightService.led1))
    # print(lightService.to_json(lightService.led1))
    resp = {
        'light1': jsonpickle.encode(lightService.led1),
        'light2': jsonpickle.encode(lightService.led2),
        'light3': jsonpickle.encode(lightService.led3)
    }
   # print(jsonpickle.encode(lightService.led2))
    return resp
    # Convert each Light object to its __dict__
 #   light_data = [light.__dict__ for light in lights]
    #return lightService.to_json(light)
@app.route('/toggle', methods=['GET'])
def toggle_light():
    lightService.toggleLightStatus(lightService.led1.get_light_identifier())
    return "Light toggleeeee"

@app.route('/motor', methods=['GET'])
def motor():
    lightService.forward(1)
    return "motor turn"

@app.route('/')
def index():
    return


@app.route('/motor/start', methods=['GET'])
def start_motor():
    '''
    global motor_running
    motor_running = True
    motor_thread = threading.Thread(target=motorService.run_motor_thread)
    motor_thread.start()
    '''
    motorService.start_motor_thread()
    return "Motor started"

@app.route('/motor/stop', methods=['GET'])
def stop_motor():
    motorService.stop_motor_thread()
    return "Motor stopped"
    
@app.route('/stop', methods=['POST'])
def shutdown():
    motorService.cleanup()
    lightService.cleanup()
    return "Pins cleaned up"

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
'''

# @app.route('/lights', methods=['GET'])
# def get_lights():
#     lights = lightService.getAllLights()
#     return jsonify(lights)




if __name__ == '__main__':
    motor_running = False
    lightService = LightServiceImpl()
    motorService = MotorServiceImpl(motor_running)
    
    app.run()
    
