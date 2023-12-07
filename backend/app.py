from flask import Flask, jsonify, request, abort
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from buisnesslayer.LightServiceImpl import LightServiceImpl
from buisnesslayer.MotorServiceImpl import MotorServiceImpl
from buisnesslayer.SensorServiceImpl import SensorServiceImpl
from models import db, User
from config import ApplicationConfig
import jsonpickle
import RPi.GPIO as GPIO
import threading


app = Flask(__name__)
app.config.from_object(ApplicationConfig)
bcrypt = Bcrypt(app) 
CORS(app, supports_credentials=True)
Forward = 17
Backward = 22

motor_running = False
motorService = MotorServiceImpl(motor_running)
lightService = LightServiceImpl()
sensorService = SensorServiceImpl()

db.init_app(app)
with app.app_context():
    db.create_all()


@app.route("/register", methods=["POST"])
@cross_origin(allow_headers="*", supports_credentials=True)
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
@cross_origin(allow_headers="*", supports_credentials=True)
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
@cross_origin(allow_headers="*", supports_credentials=True)
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
@cross_origin(allow_headers="*", supports_credentials=True)
def toggle_light(identifier):
    return jsonpickle.encode(lightService.toggleLightStatus(identifier))

#Turn Fan on
@app.route('/fan/start', methods=['GET'])
@cross_origin(allow_headers="*", supports_credentials=True)
def start_motor():
    motorService.start_motor_thread()
    return "Motor started"

@app.route('/fan/stop', methods=['GET'])
@cross_origin(allow_headers="*", supports_credentials=True)
def stop_motor():
    motorService.stop_motor_thread()
    return "Motor stopped"
    
#cleanup pins
@app.route('/cleanup', methods=['POST'])
@cross_origin(allow_headers="*", supports_credentials=True)
def shutdown():
    motorService.cleanup()
    lightService.cleanup()
    return "Pins cleaned up"
#retreive temperature
@app.route('/currentData', methods=['GET'])
@cross_origin(allow_headers="*", supports_credentials=True)
def sensor():
    return jsonify(sensorService.getSensorValue())

@app.route('/dataHistory/temperature/<filenamegiven>', methods=['GET'])
def getTemperatureDataHistory(filenamegiven):
    return sensorService.read_json_file(filenamegiven)
    
@app.route('/dataHistory/humidity/<filenamegiven>', methods=['GET'])
def getHumidityDataHistory(filenamegiven):
    return sensorService.read_json_file(filenamegiven)

def collect():
    sensorService.start_sensor_thread()
    return "Collecting"
collect_thread = threading.Thread(target=collect)
collect_thread.start()

if __name__ == '__main__':
    app.run(threaded=True)




