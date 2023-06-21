#!/bin/bash

# Fail on uninitialized variable
set -u
# Exit on any command error including intermediate failures normally trapped by pipe
set -e
set -o pipefail

yarn run build
yarn run rollup
rm -rf dist/*
cp -rf dist_old/* dist/
cp build/components.js dist/
cp build/icons.js dist/
rm -r dist/components
# mkdir dist/components

# Temporarily bring back the old Icon build
# cp -r dist_old/components/Icons dist/components/Icons
