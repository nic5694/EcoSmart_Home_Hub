from datalayer.Light import Light, LightState
import json
import RPi.GPIO as GPIO
import time
import threading
Forward = 17
Backward = 22
class MotorServiceImpl:
	
	def __init__(self, motor_running_var = True):
		self.motor_running = motor_running_var
	def forward(self,x):
		while self.motor_running:
			GPIO.output(Forward, True)
			print("Moving Forward")
			time.sleep(x)
	def start_motor_thread(self):
		print("Testing printing")
		print("motor running value " + str(self.motor_running))
		if not self.motor_running:
			self.motor_running = True
			print("Inside seeing")
			motor_thread = threading.Thread(target=self.run_motor_thread)
			motor_thread.start()
	def run_motor_thread(self):
		print("Motor thread started")
		GPIO.setmode(GPIO.BCM)
		GPIO.setup(11, GPIO.OUT)
		GPIO.setup(Forward, GPIO.OUT)
		while self.motor_running:
			self.forward(1)
			'''
			if not self.motor_running:
				break
		GPIO.output(Forward, False)
		GPIO.cleanup()'''
		
	def stop_motor_thread(self):
		print("Stop motor thread called")
		self.motor_running = False
		GPIO.output(Forward, False)
	def cleanup(self):
		GPIO.cleanup()


'''
from datalayer.Light import Light, LightState
import json
import RPi.GPIO as GPIO
import time
import threading

class MotorServiceImpl:
	
	def __init__(self, motor_running_var = True):
		self.motor_running = motor_running_var
		self.forwardPin = 11
		self.backwardPin = 22
	def forward(self,x):
		print("This is before the moving forward")
		while self.motor_running:
		#while True:
			GPIO.output(self.forwardPin, True)
			print("Moving Forward")
			time.sleep(x)
		GPIO.output(self.forwardPin, False)
		GPIO.cleanup()
	def start_motor_thread(self):
		print("Testing printing")
		print("motor running value " + str(self.motor_running))
		if not self.motor_running:
			self.motor_running = True
			print("Inside seeing")
			motor_thread = threading.Thread(target=self.run_motor_thread)
			motor_thread.start()
	def run_motor_thread(self):
		print("Motor thread started")
		GPIO.setmode(GPIO.BCM)
		GPIO.setup(self.forwardPin, GPIO.OUT)
		GPIO.setup(self.backwardPin, GPIO.OUT)
		#GPIO.output(11, True)
		#time.sleep(5)
		#GPIO.setup(13, GPIO.OUT)
		while self.motor_running:
			self.forward(1)
			
			if not self.motor_running:
				break
		GPIO.output(Forward, False)
		GPIO.cleanup()
		
	def stop_motor_thread(self):
		print("Stop motor thread called")
		self.motor_running = False
		GPIO.output(self.forwardPin, False)
		#GPIO.output(13, False)
	def cleanup(self):
		GPIO.cleanup()
'''
