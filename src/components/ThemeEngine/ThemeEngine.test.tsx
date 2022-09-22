import React from 'react';

import { render } from '@testing-library/react';
import { ThemeEngine } from './ThemeEngine';
import { ThemeVariant } from './ThemeEngine.constants';
import { themes } from './themes';

let mockStyleEngine = jest.fn();

jest.mock('./StyleEngine', () => ({
  StyleEngine: ({ styles }: { styles: string }) => {
    mockStyleEngine(styles);
    return <div />;
  }
}));

describe('<ThemeEngine />', () => {
  describe('variant', () => {
    test('should default to dark variant', () => {
      render(<ThemeEngine />);
      expect(mockStyleEngine).toHaveBeenCalledWith(themes[ThemeVariant.Dark]);
    });

    // Testing both of the variants currently, as we only have two variants.
    // As we add more variants, we should make these tests more generic.

    test('should render StyleEngine with dark styles when variant is Dark', () => {
      render(<ThemeEngine variant={ThemeVariant.Dark} />);
      expect(mockStyleEngine).toHaveBeenCalledWith(themes[ThemeVariant.Dark]);
    });

    test('should render StyleEngine with light styles when variant is Light', () => {
      render(<ThemeEngine variant={ThemeVariant.Light} />);
      expect(mockStyleEngine).toHaveBeenCalledWith(themes[ThemeVariant.Light]);
    });
  });
});
