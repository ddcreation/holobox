#!/bin/bash

# Kill existing chromium
killall chromium-browser 2> /dev/null

export DISPLAY=:0.0
chromium-browser http://localhost/ http://localhost/clock http://localhost/hologram --kiosk --noerrdialogs --disable-infobars --no-first-run --enable-features=OverlayScrollbar --start-maximized --disable-extensions
