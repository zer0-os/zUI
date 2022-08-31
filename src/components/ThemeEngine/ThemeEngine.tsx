import { useEffect } from 'react';
import { kebabCase } from 'lodash';
import { Theme, DEFAULT_THEME, ThemeColorKeys } from './ThemeEngine.constants';
import { CSS_PREFIX } from '../constants';
import { ThemeColors } from './ThemeColors';

type ThemeEngineProps = {
  theme?: Theme;
  element?: HTMLElement;
};

export const ThemeEngine = ({ theme = DEFAULT_THEME, element = document.documentElement }: ThemeEngineProps) => {
  const setThemeVars = () => {
    Object.values(ThemeColorKeys).forEach(prop => {
      element.style.setProperty(`--${CSS_PREFIX}-${kebabCase(prop)}`, ThemeColors[theme][prop]);
    });
  };

  useEffect(setThemeVars, [theme, element]);

  return <></>;
};
