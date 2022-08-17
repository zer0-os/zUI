/* eslint-disable */
const path = require('path');
const fse = require('fs-extra');

const exportStyles = () => {
  console.log('\x1b[36m', `Copying styles to dist...`, '\x1b[0m');

  const srcDir = path.resolve(__dirname, '../src/styles');
  const destDir = path.resolve(__dirname, '../dist/styles');

  fse.copySync(srcDir, destDir, { overwrite: true });

  console.log('\x1b[36m', 'Successfully copied!', '\x1b[0m');
};

exportStyles();
