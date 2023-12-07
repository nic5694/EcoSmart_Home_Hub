from datalayer.Light import Light, LightState
import jsonpickle
import RPi.GPIO as GPIO
import time
import threading
Forward = 17
Backward = 22

class LightServiceImpl():

    def __init__(self):
        self.led1 = Light(1, "Kitchen", LightState.OFF, "white", 15)
        self.led2 = Light(2, "Living Room", LightState.OFF, "white", 26)
        GPIO.setmode(GPIO.BCM)
       

        # Create a dictionary to store the lights
        self.Lights = {
            self.led1.get_light_identifier(): self.led1,
            self.led2.get_light_identifier(): self.led2
        }
        

    def getLightState(self, lightIdentifier: str):
        if lightIdentifier in self.Lights:
            return self.Lights[lightIdentifier].get_state()

    def toggleLightStatus(self, lightIdentifier: str):
        pinNum= self.Lights[lightIdentifier].get_ledPinNum()
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(pinNum, GPIO.OUT)
        if lightIdentifier in self.Lights:
            if self.Lights[lightIdentifier].get_state() == LightState.ON:
                self.Lights[lightIdentifier].set_state(LightState.OFF)
                GPIO.output(pinNum, GPIO.LOW)
            else:
                self.Lights[lightIdentifier].set_state(LightState.ON)
                GPIO.output(pinNum, GPIO.HIGH)
            return self.Lights[lightIdentifier]
            #need to throw an error later
        return "Invalid entry"
        
    
    def getAllLights(self):
        resp = {
            light_id: jsonpickle.encode(light, unpicklable = False)
            for light_id, light in self.Lights.items()
        }
        return resp

    def getOneLight(self, id: int):
        return jsonify(self.Lights.get(int))

    def cleanup(self):
        GPIO.setmode(GPIO.BCM)
        for light in self.Lights:
            self.Lights[light].set_state(LightState.OFF)
        GPIO.cleanup()
    
    '''
    def forward(self, x):
        while self.motor_running:
            GPIO.output(Forward, True)
            print("Moving Forward")
            time.sleep(x)
            
    def forward(self, x):
        while self.motor_running:
            GPIO.output(Forward, True)
            print("Moving Forward")
            time.sleep(x)
    
    def turnMotor(self):
        p = GPIO.PWM(11, 50)
        p.start(0)
        p.ChangeDutyCycle(10)
        time.sleep(2)
        p.ChangeDutyCycle(10)
        time.sleep(2)
        p.stop()    
        GPIO.cleanup()
        
    def start_motor_thread(self):
        print("Testing printing")
        print("motor running value " + str(self.motor_running))
        if not self.motor_running:
            self.motor_running = True
            print("Inside seeing")
            #self.motor_running = False
            motor_thread = threading.Thread(target = self.run_motor_thread)
            motor_thread.start()
    def run_motor_thread(self):
        print("Motor thread started")
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(11,GPIO.OUT)
        GPIO.setup(Forward, GPIO.OUT)
        while self.motor_running:
            self.forward(1)
            if not self.motor_running:
                break
        GPIO.output(Forward, False)
        GPIO.cleanup()
    def stop_motor_thread(self):
        print("Stop motor thread called")
        #self.motor_running = False
        self.motor_running = False
        GPIO.output(Forward, False)
        GPIO.cleanup()
        


    def reverse(self, x):
        GPIO.output(Backward, True)
        print("Moving Backward")
        time.sleep(x)
        GPIO.output(Backward, False)
        GPIO.cleanup()
'''
'''
    def turnMotor(self):

        p = GPIO.PWM(11, 50)  # Set the pin and frequency as per your setup
        p.start(0)
            
        try:
            p.ChangeDutyCycle(20)
            time.sleep(10)  # Motor runs for 10 seconds
        except KeyboardInterrupt:
            pass
        finally:
            p.stop()
            GPIO.cleanup()
            '''
