import { CSS_PREFIX } from '../constants';
import { kebabCase } from 'lodash';

/**
 * Converts a string to a zUI CSS variable name
 * e.g. toCssVariableName('primary1') -> 'zui-primary-1'
 * @param name
 */
export const toCssVariableName = (name: string) => {
  return `--${CSS_PREFIX}-${kebabCase(name)}`;
};
