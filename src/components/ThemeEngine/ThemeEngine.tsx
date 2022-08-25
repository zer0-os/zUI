import type { FC } from 'react';

import { useEffect } from 'react';
import { kebabCase } from 'lodash';
import { Theme, DEFAULT_THEME } from './ThemeEngine.constants';
import { CSS_PREFIX } from '../constants';
import { ThemeColors } from './ThemeColors';

type ThemeEngineProps = {
  theme?: Theme;
  element?: HTMLElement;
};

export const ThemeEngine: FC<ThemeEngineProps> = ({ theme = DEFAULT_THEME, element = document.documentElement }) => {
  const setThemeVars = () => {
    Object.keys(ThemeColors[theme]).forEach(prop => {
      element.style.setProperty(`--${CSS_PREFIX}-${kebabCase(prop)}`, ThemeColors[theme][prop]);
    });
  };

  useEffect(setThemeVars, [theme, element]);

  return null;
};
