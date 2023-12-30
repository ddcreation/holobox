#!/bin/bash

# Kill existing chromium
killall chromium-browser > /dev/null

# Find Chromium browser process ID
chromium_pid=""

# Check if Chromium is running
while [[ -z $chromium_pid ]]; do
  echo "Chromium still launching..."

  sleep 5
  chromium_pid=$(pgrep chromium | head -1)
done

echo "Chromium browser process ID: $chromium_pid"

export DISPLAY=:0.0
chromium-browser http://localhost/ http://localhost/clock http://localhost/hologram --kiosk --noerrdialogs --disable-infobars --no-first-run --enable-features=OverlayScrollbar --start-maximized
