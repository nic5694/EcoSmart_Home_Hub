from flask import Flask
from buisnesslayer.LightServiceImpl import LightServiceImpl
import jsonpickle

lightService = LightServiceImpl()

app = Flask(__name__)


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


@app.route('/')
def index():
    return


# @app.route('/lights', methods=['GET'])
# def get_lights():
#     lights = lightService.getAllLights()
#     return jsonify(lights)



if __name__ == '__main__':
    app.run()
