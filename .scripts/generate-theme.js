console.log('Generating theme file');

const path = require('path');
const fs = require('fs');
const kebabCase = require('lodash.kebabcase');

const themePath = path.resolve(__dirname, '..', 'src', 'components', 'ThemeEngine', 'theme.json');
const rawdata = fs.readFileSync(themePath, 'UTF-8');
const theme = JSON.parse(rawdata);

const lines = ['// This is a generated file. To regenerate run `yarn run generate-theme`', ''];
// Base assumption is that there is a 'light' mode
Object.keys(theme['light']).forEach(prop => {
  const name = kebabCase(prop);
  const scss = `$${name}: var(--${name});`;
  lines.push(scss);
});

const outputPath = path.resolve(__dirname, '..', 'src', 'styles', '_theme.scss');
fs.writeFileSync(outputPath, lines.join('\n'));

console.log('Done generating theme file');
