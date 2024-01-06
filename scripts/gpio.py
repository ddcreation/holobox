#!/usr/bin/env python
import os
import RPi.GPIO as GPIO

def button_callback(channel):
    print(f"{pins_wires[channel][0]} button was pushed!")
    os.system(pins_wires[channel][1])

# Config
bounce=500
wires_pins =  {"red":(37, None), "green": (36, '/usr/bin/switchtab'), "white":(31, None)}
pins_wires = {v[0]: (k, v[1]) for k, v in wires_pins.items()}

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)

# Setup connectors
for pin, action in wires_pins.values():
  print(pin, action)
  if action:
    print(f"Pin {pin} activated (button {pins_wires[pin][0]}, action: {action})")
    GPIO.setup(pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
    GPIO.add_event_detect(pin,GPIO.FALLING,callback=button_callback,bouncetime=bounce)

# input waiting
message = input("Press enter to quit\n\n") # Run until someone presses enter
GPIO.cleanup() # Clean up
