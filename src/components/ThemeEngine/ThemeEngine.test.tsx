import React from 'react';
import { render } from '@testing-library/react';

import { Component, ThemeComponentProperties, Themes } from '.';

describe('theme-engine', () => {
  const getElement = (setProperty = (_prop: string, _value: string): any => undefined) => {
    return { style: { setProperty } } as HTMLElement;
  };

  const renderComponent = (props: Partial<ThemeComponentProperties> = {}) => {
    const allProps: ThemeComponentProperties = {
      element: getElement(),
      theme: Themes.Light,
      themes: {},
      ...props
    };

    return render(<Component {...allProps} />);
  };

  it('sets css vars based on view mode', function () {
    const setProperty = vi.fn();
    const themes = {
      dark: {
        textColor: 'red',
        backgroundColor: 'purple'
      },
      light: {
        textColor: 'white',
        backgroundColor: 'green'
      }
    };

    renderComponent({
      element: getElement(setProperty),
      themes,
      theme: Themes.Dark
    });

    expect(setProperty).toHaveBeenCalledWith('--text-color', 'red');
    expect(setProperty).toHaveBeenCalledWith('--background-color', 'purple');
  });

  it('sets css vars based on updated view mode', function () {
    const setProperty = vi.fn();
    const themes = {
      dark: {
        textColor: 'red',
        backgroundColor: 'purple'
      },
      light: {
        textColor: 'white',
        backgroundColor: 'green'
      }
    };

    const element = getElement(setProperty);
    const { rerender } = renderComponent({
      element: element,
      themes,
      theme: Themes.Dark
    });

    rerender(<Component element={element} themes={themes} theme={Themes.Light} />);

    expect(setProperty).toHaveBeenCalledWith('--text-color', 'white');
    expect(setProperty).toHaveBeenCalledWith('--background-color', 'green');
  });
});
