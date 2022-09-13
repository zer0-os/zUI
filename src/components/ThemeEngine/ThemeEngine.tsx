import type { Theme } from './ThemeEngine.types';

import React, { useEffect } from 'react';
import { kebabCase } from 'lodash';
import { CSS_PREFIX } from '../constants';
import { ThemeVariant, DEFAULT_THEME_VARIANT } from './ThemeEngine.constants';
import { themes } from './themes';

type ThemeEngineProps = {
  theme?: ThemeVariant;
  element?: HTMLElement;
};

export const ThemeEngine = ({
  theme = DEFAULT_THEME_VARIANT,
  element = document.documentElement
}: ThemeEngineProps) => {
  const setThemeVars = () => {
    Object.keys(themes[theme]).forEach((prop: keyof Theme) => {
      element.style.setProperty(`--${CSS_PREFIX}-${kebabCase(prop)}`, themes[theme][prop]);
    });
  };

  useEffect(setThemeVars, [theme, element]);

  return <></>;
};
