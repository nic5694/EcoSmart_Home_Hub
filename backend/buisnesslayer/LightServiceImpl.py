from .LightService import LightService
from datalayer.Light import Light, LightState
import json
import RPi.GPIO as GPIO
import time
import threading
Forward = 17
Backward = 22

class LightServiceImpl(LightService):

    def __init__(self):
        self.led1 = Light(1, "Kitchen", LightState.OFF, 0.0, "white", 15)
        self.led2 = Light(2, "Living Room", LightState.OFF, 0.0, "white", 7)
        self.led3 = Light(3, "Bedroom", LightState.OFF, 0.0, "white", 8)
        GPIO.setmode(GPIO.BCM)
       

        # Create a dictionary to store the lights
        self.Lights = {
            self.led1.get_light_identifier(): self.led1,
            self.led2.get_light_identifier(): self.led2,
            self.led3.get_light_identifier(): self.led3
        }
        

    def getLightState(self, lightIdentifier: str):
        if lightIdentifier in self.Lights:
            return self.Lights[lightIdentifier].get_state()

    def toggleLightStatus(self, lightIdentifier: str):
        pinNum= self.Lights[lightIdentifier].get_ledPinNum()
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(pinNum, GPIO.OUT)
        print(self.Lights[lightIdentifier].get_state())
        if lightIdentifier in self.Lights:
            if self.Lights[lightIdentifier].get_state() == LightState.ON:
                self.Lights[lightIdentifier].set_state(LightState.OFF)
                GPIO.output(pinNum, GPIO.LOW)
                print("Turning off")
            else:
                self.Lights[lightIdentifier].set_state(LightState.ON)
               # self.Lights[lightIdentifier].get_led().on()
                GPIO.output(pinNum, GPIO.HIGH)
                print("Turning on")
        print(self.Lights[lightIdentifier].get_state())

    def setLightBrightness(self, lightIdentifier: str, brightness: float):
        if lightIdentifier in self.Lights:
            self.Lights[lightIdentifier].set_brightness(brightness)
            self.Lights[lightIdentifier].get_led().value = brightness
        return self.Lights[lightIdentifier].get_brightness()

    def getAllLights(self):
        return self.Lights

    def getOneLight(self):
        return self.Lights.get(1)

    def to_json(obj):
        return json.dumps(obj, default=lambda obj: obj.__dict__)
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
