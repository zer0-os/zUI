import type { Theme } from './ThemeEngine.types';

import React, { useEffect } from 'react';
import { kebabCase } from 'lodash';
import { CSS_PREFIX } from '../constants';
import { ThemeVariant, DEFAULT_THEME_VARIANT } from './ThemeEngine.constants';
import { ThemeColors } from './ThemeColors';

type ThemeEngineProps = {
  theme?: ThemeVariant;
  element?: HTMLElement;
};

export const ThemeEngine = ({
  theme = DEFAULT_THEME_VARIANT,
  element = document.documentElement
}: ThemeEngineProps) => {
  const setThemeVars = () => {
    Object.keys(ThemeColors[theme]).forEach((prop: keyof Theme) => {
      element.style.setProperty(`--${CSS_PREFIX}-${kebabCase(prop)}`, ThemeColors[theme][prop]);
    });
  };

  useEffect(setThemeVars, [theme, element]);

  return <></>;
};
