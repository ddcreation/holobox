#!/bin/bash

HOLOBOX_PATH=$(dirname $0)/../
cd $HOLOBOX_PATH;

echo "Downloading updates..."
git reset --hard origin/master
echo "Installing..."
npm install;
echo "Building new package..."
ng build --configuration="production";
chmod 755 -R dist;
cp -R dist/holobox/browser/* /var/www/html/;
