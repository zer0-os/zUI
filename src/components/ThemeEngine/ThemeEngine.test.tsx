import React from 'react';
import { render } from '@testing-library/react';

import { Component, ThemeEngineProperties, ViewModes } from '.';

describe('theme-engine', () => {
  const getElement = (setProperty = (_prop: string, _value: string): any => undefined) => {
    return { style: { setProperty } } as HTMLElement;
  };

  const renderComponent = (props: Partial<ThemeEngineProperties> = {}) => {
    const allProps: ThemeEngineProperties = {
      element: getElement(),
      viewMode: ViewModes.Light,
      theme: {},
      ...props
    };

    return render(<Component {...allProps} />);
  };

  it('sets css vars based on view mode', function () {
    const setProperty = jest.fn();
    const theme = {
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
      theme,
      viewMode: ViewModes.Dark
    });

    expect(setProperty).toHaveBeenCalledWith('--text-color', 'red');
    expect(setProperty).toHaveBeenCalledWith('--background-color', 'purple');
  });

  it('sets css vars based on updated view mode', function () {
    const setProperty = jest.fn();
    const theme = {
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
      theme,
      viewMode: ViewModes.Dark
    });

    rerender(<Component element={element} theme={theme} viewMode={ViewModes.Light} />);

    expect(setProperty).toHaveBeenCalledWith('--text-color', 'white');
    expect(setProperty).toHaveBeenCalledWith('--background-color', 'green');
  });
});
