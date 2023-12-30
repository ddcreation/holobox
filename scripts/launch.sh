#!/bin/bash

# Launch Chromium
. chromium.sh

cd ../;

# Check if needs update
git fetch origin
reslog=$(git log HEAD..origin/master --oneline)
if [[ "${reslog}" != "" ]] ; then
  git pull origin
  cp scripts/templates/lxsession-autostart ~/.config/lxsession/LXDE-pi/autostart
  npm install
  ng build --configuration="production"

  cp -R dist/holobox/browser/* /var/www/html/

  . chromium.sh

