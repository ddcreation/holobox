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
sudo apt install nginx
###################################

###################################
# Auto launch at login
###################################
cp ~/holobox/scripts/templates/lxsession/lxsession-autostart ~/.config/lxsession/LXDE-pi/autostart
###################################
