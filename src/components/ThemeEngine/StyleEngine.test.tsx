import React from 'react';
import { StyleEngine } from './StyleEngine';
import { render } from '@testing-library/react';

let mockPortal = jest.fn();

jest.mock('@radix-ui/react-portal', () => ({
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  Root: (props: any) => {
    mockPortal(props);
    return <div data-testid="mock-portal">{props.children}</div>;
  }
}));

jest.spyOn(global.console, 'warn');

describe('<StyleEngine />', () => {
  describe('when using Radix Portal (@radix-ui/react-portal)', () => {
    const { getByTestId } = render(<StyleEngine />);

    test('should render a style element in portal', () => {
      const head = getByTestId('mock-portal');
      expect(head.children.length).toBe(1);
      expect(head.children[0].nodeName).toBe('STYLE');
    });

    test('should set isChild=true on portal', () => {
      expect(mockPortal).toHaveBeenCalledWith(expect.objectContaining({ asChild: true }));
    });

    test('should set container=document.head on portal', () => {
      expect(mockPortal).toHaveBeenCalledWith(expect.objectContaining({ container: document.head }));
    });
  });

  describe('when all CSS is valid', () => {
    test('should add formatted CSS variables to :root', () => {
      const styles = { primaryColor1: '#000', alphaPrimary1: 'rgba(177, 78, 255, 0.03)' };
      const expectedCSS = ':root { --zui-primary-color-1: #000; --zui-alpha-primary-1: rgba(177, 78, 255, 0.03); }';

      const { container } = render(<StyleEngine styles={styles} />);
      const style = container.querySelector('#zui-theme-variables');
      expect(style.innerHTML).toBe(expectedCSS);
    });
  });

  describe('when passing invalid CSS', () => {
    const styles = { primary: 'styleengine', secondary: 'red' };
    const expectedCSS = ':root { --zui-secondary: red; }';
    let container: HTMLElement;
    beforeEach(() => {
      jest.resetAllMocks();
      const result = render(<StyleEngine styles={styles} />);
      container = result.container;
    });

    test('should filter invalid CSS', () => {
      const style = container.querySelector('#zui-theme-variables');
      expect(style.innerHTML).toBe(expectedCSS);
    });

    test('should warn in console', () => {
      expect(console.warn).toHaveBeenCalledTimes(1);
    });
  });
});
