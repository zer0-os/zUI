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
rm  -r dist/components/Skeleton
cp -r build/components/Skeleton dist/components/Skeleton
rm  -r dist/components/SkeletonText
cp -r build/components/SkeletonText dist/components/SkeletonText
rm  -r dist/components/Image
cp -r build/components/Image dist/components/Image
rm  -r dist/components/Avatar
cp -r build/components/Avatar dist/components/Avatar
rm  -r dist/components/IconButton
cp -r build/components/IconButton dist/components/IconButton
rm  -r dist/components/Alert
cp -r build/components/Alert dist/components/Alert
rm -r dist/components/Modal
cp -r build/components/Modal dist/components/Modal
rm -r dist/components/Accordion
cp -r build/components/Accordion dist/components/Accordion
rm -r dist/components/Status
cp -r build/components/Status dist/components/Status
rm -r dist/components/ToastNotification
cp -r build/components/ToastNotification dist/components/ToastNotification