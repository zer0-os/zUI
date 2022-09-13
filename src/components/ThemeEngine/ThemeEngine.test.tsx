import React from 'react';
import { render } from '@testing-library/react';
import { DEFAULT_THEME_VARIANT, Theme, ThemeEngine, themes, ThemeVariant, toCssVariableName } from '.';

describe('toCssVariableName', () => {
  it('should correctly format CSS variable names', () => {
    expect(toCssVariableName('primary1')).toEqual('--zui-primary-1');
    expect(toCssVariableName('primary')).toEqual('--zui-primary');
    expect(toCssVariableName('shouldBeKebabCase')).toEqual('--zui-should-be-kebab-case');
  });
});

const compareTheme = (theme: Theme, properties: CSSStyleDeclaration) => {
  for (const color in theme) {
    const value = properties.getPropertyValue(toCssVariableName(color));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const expected = theme[color as any];
    expect(value).toEqual(expected);
  }
};

test('should set global CSS variables for theme from props', () => {
  const { rerender } = render(<ThemeEngine theme={ThemeVariant.Light} />);

  compareTheme(themes[ThemeVariant.Light], getComputedStyle(document.documentElement));

  rerender(<ThemeEngine theme={ThemeVariant.Dark} />);

  compareTheme(themes[ThemeVariant.Dark], getComputedStyle(document.documentElement));
});

test('should use default theme from ThemeEngine.constants.ts', () => {
  render(<ThemeEngine />);

  compareTheme(themes[DEFAULT_THEME_VARIANT], getComputedStyle(document.documentElement));
});
