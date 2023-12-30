#!/bin/bash

cd ../;
git pull origin;

npm install;
ng build --configuration="production";

cp -R dist/holobox/browser/* /var/www/html/

chromium-browser http://localhost/ http://localhost/clock http://localhost/hologram --kiosk --noerrdialogs --disable-infobars --no-first-run --enable-features=OverlayScrollbar --start-maximized
