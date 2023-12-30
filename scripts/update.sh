#!/bin/bash

HOLOBOX_PATH=$(dirname $0)/../
cd $HOLOBOX_PATH;

echo "Downloading updates..."
git pull origin;
echo "Setting up files changes!"
chmod 755 -R scripts;
cp scripts/templates/lxsession-autostart ~/.config/lxsession/LXDE-pi/autostart;
echo "Installing..."
npm install;
echo "Building new package..."
ng build --configuration="production";
cp -R dist/holobox/browser/* /var/www/html/;
