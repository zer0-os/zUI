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
rm  -r dist/components/Input
cp -r build/components/Input dist/components/Input

#rm  dist/components/Input/PasswordInput*
#cp -r build/components/Input/PasswordInput* dist/components/Input/
#rm  dist/components/Input/NumberInput*
#cp -r build/components/Input/NumberInput* dist/components/Input/
#rm  dist/components/Input/index*
#cp -r build/components/Input/index* dist/components/Input/
