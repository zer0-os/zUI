import { capitalize } from 'lodash';
import colors from './ColorsLegacy.module.scss';

export const ColorGroups = [...new Set(Object.keys(colors).map(colorKey => colorKey.split('-')[0]))];

export const colorsByGroup = (group: string) =>
  Object.keys(colors)
    .filter(colorKey => colorKey.startsWith(group + '-'))
    .map(colorKey => ({
      title: colorKey
        .replace(group + '-', '')
        .split('-')
        .map(c => capitalize(c))
        .join(' '),
      variable: `$${colorKey.replace(group + '-', '')}`,
      color: colors[colorKey]
    }));
