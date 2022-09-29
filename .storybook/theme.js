import { create } from '@storybook/theming';
import pkg from '../package.json';

export const theme = create({
  base: 'light',
  brandTitle: `zUI v.${pkg.version}`
});
