#!/bin/bash
HOLOBOX_PATH=$(dirname $0)/../

cd $HOLOBOX_PATH;
# Launch Chromium
. scripts/chromium.sh &

# Check if needs update
git fetch origin
reslog=$(git log HEAD..origin/master --oneline)
if [[ "${reslog}" != "" ]] ; then
  git pull origin;
  chmod 755 -R scripts;
  cp scripts/templates/lxsession-autostart ~/.config/lxsession/LXDE-pi/autostart;
  npm install;
  ng build --configuration="production";

  cp -R dist/holobox/browser/* /var/www/html/;

  . scripts/chromium.sh &
fi

exit 0
