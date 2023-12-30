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
ln -s ~/holobox/scripts/templates/lxsession/lxsession-autostart ~/.config/lxsession/LXDE-pi/
ln -s ~/holobox/scripts/launch.sh ~/.config/lxsession/LXDE-pi/
###################################
