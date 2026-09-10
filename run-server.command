#!/bin/bash
# Double-click me on a Mac to start Stonetop for everyone on the Wi-Fi.
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Get it from https://nodejs.org (the LTS download), then double-click this again."
  read -n 1 -s -r -p "Press any key to close."
  exit 1
fi
node server.js
