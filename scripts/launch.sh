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
  bash scripts/update.sh
  echo "Relaunching browser..."
  . scripts/chromium.sh &
else
  echo "No Updates"
fi
echo "Everything up to date!"
exit 0
