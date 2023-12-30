#!/bin/bash

# Kill existing chromium
echo "Stopping chromium if any"
killall chromium-browser

export DISPLAY=:0.0
echo "Launching chromium"
chromium-browser http://localhost/ http://localhost/clock http://localhost/hologram --kiosk --noerrdialogs --disable-infobars --no-first-run --enable-features=OverlayScrollbar --start-maximized --disable-extensions &

exit 0
