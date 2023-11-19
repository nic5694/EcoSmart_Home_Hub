from flask import Flask, jsonify, request, abort
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from models import db, User
from config import ApplicationConfig
from buisnesslayer.LightServiceImpl import LightServiceImpl
from buisnesslayer.MotorServiceImpl import MotorServiceImpl
from buisnesslayer.SensorServiceImpl import SensorServiceImpl
import jsonpickle
import RPi.GPIO as GPIO
import threading



app = Flask(__name__)
app.config.from_object(ApplicationConfig)
bcrypt = Bcrypt(app) 
CORS(app, supports_credentials=True)

Forward = 17
Backward = 22

temperature_queue = []
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })

@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    

    return jsonify({
        "id": user.id,
        "email": user.email
    })

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





