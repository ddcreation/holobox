#!/bin/bash

# Log output
LOGFILE=$(dirname $0)/../log/browser.log
touch $LOGFILE
exec > >(tee -i $LOGFILE)
exec 2>&1

# Kill existing chromium
echo "Stopping chromium if any"
killall chromium-browser

echo "Launching chromium"
export DISPLAY=:0.0
chromium-browser http://localhost/ http://localhost/clock http://localhost/hologram --kiosk --noerrdialogs --disable-infobars --no-first-run --enable-features=OverlayScrollbar --start-maximized --disable-extensions

exit 0
