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
cp templates/autostart ~/.config/lxsession/LXDE-pi/
chmod 755 ~/.config/lxsession/LXDE-pi/autostart
###################################
