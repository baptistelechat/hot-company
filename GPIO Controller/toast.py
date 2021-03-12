from pycnic.core import Handler
from pycnic.errors import HTTP_400
import json
import requests
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18,GPIO.OUT) # Electroaimant linéaire
GPIO.setup(17,GPIO.OUT) # résistance chauffante


class Toast(Handler):

    def get(self):
        print("Toast for " + str(self.request.data['time']) + "seconds")
        GPIO.output(18,GPIO.HIGH)
        time.sleep(1)
        GPIO.output(17,GPIO.HIGH)
        time.sleep(self.request.data['time'])
        GPIO.output(18,GPIO.LOW)
        GPIO.output(17,GPIO.LOW)
        return {
            "toasted": str(self.request.data['time']) + " seconds"
        }