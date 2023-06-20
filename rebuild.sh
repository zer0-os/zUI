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
cp build/index.js dist/
rm -r dist/components/Button
cp -r build/components/Button dist/components/Button
