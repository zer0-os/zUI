import React, { useEffect } from 'react';

import { kebabCase } from 'lodash';
import type { Theme } from './ThemeEngine.types';
import { CSS_PREFIX } from '../constants';
import { DEFAULT_THEME_VARIANT, ThemeVariant } from './ThemeEngine.constants';
import { themes } from './themes';

export interface ThemeEngineProps {
  theme?: ThemeVariant;
}

/**
 * Converts a string to a zUI CSS variable name
 * e.g. toCssVariableName('primary1') -> 'zui-primary-1'
 * @param name
 */
export const toCssVariableName = (name: string) => {
  return `--${CSS_PREFIX}-${kebabCase(name)}`;
};

export const ThemeEngine = ({ theme = DEFAULT_THEME_VARIANT }: ThemeEngineProps) => {
  const setThemeVars = () => {
    Object.keys(themes[theme]).forEach((color: keyof Theme) => {
      document.documentElement.style.setProperty(toCssVariableName(color), themes[theme][color]);
    });
  };

  useEffect(setThemeVars, [theme]);

  return <></>;
};
