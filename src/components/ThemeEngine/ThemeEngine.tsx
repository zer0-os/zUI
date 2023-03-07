import React from 'react';
import kebabCase from 'lodash.kebabcase';

import builtinThemes from './theme.json';

export enum Themes {
  Light = 'light',
  Dark = 'dark'
}

type ThemeDefinition = { [styleProp: string]: string };
type ThemeList = { [viewMode: string]: ThemeDefinition };

export interface ThemeComponentProperties {
  theme: Themes;
  element?: HTMLElement;
  themes?: ThemeList;
}

export const Component = React.memo(
  ({ theme = Themes.Dark, element = document.documentElement, themes = builtinThemes }: ThemeComponentProperties) => {
    writeThemePropertiesToElement(themes[theme], element);
    return null;
  }
);

function writeThemePropertiesToElement(theme: ThemeDefinition, element: HTMLElement) {
  Object.keys(theme).forEach(cssProperty => {
    element.style.setProperty(`--${kebabCase(cssProperty)}`, theme[cssProperty]);
  });
}

export function ThemeEngine(props: { theme: Themes }) {
  return <Component theme={props.theme} />;
}
