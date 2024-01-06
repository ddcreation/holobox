#!/usr/bin/env python
import os, sys, signal, logging
import RPi.GPIO as GPIO

# Logging
logging.basicConfig(level=logging.DEBUG, filename=os.path.realpath(os.path.dirname(__file__)+ '/../log/gpio.log'), filemode="a+", format="%(asctime)-15s %(levelname)-8s %(message)s")

# Config
bounce=500
wires_pins =  {"red":(37, None), "green": (36, '/usr/bin/switchtab'), "white":(31, None)}
pins_wires = {v[0]: (k, v[1]) for k, v in wires_pins.items()}

# SIGTERM management
def signal_handler(signal, frame):
    logging.info("SIGTERM send, stopping listeners")
    GPIO.cleanup()
    sys.exit(0)

signal.signal(signal.SIGINT, signal_handler)

# Buttons listener callback
def button_callback(channel):
    logging.info(f"{pins_wires[channel][0]} button was pushed!")
    os.system(pins_wires[channel][1])

# Setup GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)

# Setup connectors
for pin, action in wires_pins.values():
  logging.info(f"Checking pin {pin} (button {pins_wires[pin][0]}, action: {action})")

  if action:
    GPIO.setup(pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
    logging.info(f"Pin {pin} ACTIVATED")
    GPIO.add_event_detect(pin,GPIO.FALLING,callback=button_callback,bouncetime=bounce)

try:
    logging.info("Start listening...")
    while True:
       pass
except KeyboardInterrupt: # clean up GPIO on CTRL+C exit
    logging.info("Stop by interrupt")
    GPIO.cleanup()
