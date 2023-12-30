#!/bin/bash

# Launch Chromium
. chromium.sh

cd ../;

# Check if needs update
git fetch origin
reslog=$(git log HEAD..origin/master --oneline)
if [[ "${reslog}" != "" ]] ; then
  git reset --hard origin/master
  npm install
  ng build --configuration="production"

  cp -R dist/holobox/browser/* /var/www/html/

  . chromium.sh

