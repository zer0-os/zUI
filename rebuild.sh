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
rm -r dist/components
cp -r build/components dist/components

# Temporarily bring back the old Icon build
rm -r dist/components/Icons
cp -r dist_old/components/Icons dist/components/Icons
