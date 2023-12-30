#!/bin/bash
HOLOBOX_PATH=$(dirname $0)/../

cd $HOLOBOX_PATH;
# Launch Chromium
echo "Launch chromium script."
. scripts/chromium.sh &

# Check if needs update
echo "Checking for updates..."
git fetch origin
reslog=$(git log HEAD..origin/master --oneline)
if [[ "${reslog}" != "" ]] ; then
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
  echo "Relaunching browser..."
  . scripts/chromium.sh &
fi
echo "Everything up to date!"
exit 0
