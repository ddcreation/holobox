#!/bin/bash
HOLOBOX_PATH=$(dirname $0)/../

# Log output
LOGFILE="${HOLOBOX_PATH}log/launch.log"
touch $LOGFILE
exec > >(tee -i $LOGFILE)
exec 2>&1

cd $HOLOBOX_PATH;

# GPIOs listeners
echo "Stopping GPIO listeners if any"
killall gpio.py
echo "Launching GPIO listeners script"
python3 scripts/gpio.py &

# Launch Chromium
echo "Launch chromium script."
bash scripts/chromium.sh &

# Check if needs update
echo "Checking for updates..."
git fetch origin
reslog=$(git log HEAD..origin/master --oneline)
if [[ "${reslog}" != "" ]] ; then
  echo "Launching update script"
  bash scripts/update.sh
  echo "Relaunching browser..."
  bash scripts/chromium.sh &
else
  echo "No Updates"
fi
echo "Everything up to date!"
exit 0
