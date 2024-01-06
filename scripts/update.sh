#!/bin/bash
HOLOBOX_PATH=$(dirname $0)/../

# Log output
LOGFILE="${HOLOBOX_PATH}log/update.log"
touch $LOGFILE
exec > >(tee -i $LOGFILE)
exec 2>&1

cd $HOLOBOX_PATH;

echo "Downloading updates..."
git reset --hard origin/master
echo "Installing..."
npm install;
echo "Building new package..."
ng build --configuration="production";
chmod 755 -R dist;
cp -R dist/holobox/browser/* /var/www/html/;
