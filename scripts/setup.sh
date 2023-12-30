#!/bin/bash

###################################
# Install dependencies
###################################
sudo apt update
sudo apt upgrade

# Keyboard simulator
sudo apt install xdotool

# LightHTTP
sudo apt remove apache2
sudo apt install lighttpd
###################################

###################################
# Auto launch at login
###################################
ln -s scripts/templates/autostart ~/.config/lxsession/LXDE-pi/
###################################
