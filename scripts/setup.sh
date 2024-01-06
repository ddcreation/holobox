#!/bin/bash

###################################
# Install dependencies
###################################
sudo apt update
sudo apt upgrade

# Keyboard simulator
sudo apt install xdotool

# HTTP server
sudo apt remove apache2
sudo apt install nginx
###################################

###################################
# Links to scripts
###################################
# Autolauncher
ln -s ~/holobox/scripts/templates/lxsession/lxsession-autostart ~/.config/lxsession/LXDE-pi/autostart
# Bin
sudo ln -s ~/holobox/scripts/launch.sh /usr/bin/holobox-launch
sudo ln -s ~/holobox/scripts/switchtab.sh /usr/bin/switchtab

