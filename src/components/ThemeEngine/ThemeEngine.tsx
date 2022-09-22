import React from 'react';

import { DEFAULT_THEME_VARIANT, ThemeVariant } from './ThemeEngine.constants';
import { themes } from './themes';

import { StyleEngine } from './StyleEngine';

export interface ThemeEngineProps {
  variant?: ThemeVariant;
}

/**
 * ThemeEngine is responsible for sending the correct theme to StyleEngine.
 * @param variant The theme variant to use
 * @constructor
 */
export const ThemeEngine = ({ variant = DEFAULT_THEME_VARIANT }: ThemeEngineProps) => {
  return <StyleEngine styles={themes[variant]} />;
};
