import React from 'react';
import kebabCase from 'lodash.kebabcase';

import theme from './theme.json';

export enum ViewModes {
  Light = 'light',
  Dark = 'dark'
}

export interface ThemeComponentProperties {
  viewMode: ViewModes;
  element: HTMLElement;
  theme: { [viewMode: string]: { [styleProp: string]: string } };
}

export class Component extends React.Component<ThemeComponentProperties> {
  componentDidMount() {
    this.setVars(this.props.viewMode);
  }

  componentDidUpdate(prevProps: ThemeComponentProperties) {
    if (prevProps.viewMode !== this.props.viewMode) {
      this.setVars(this.props.viewMode);
    }
  }

  setVars(viewMode: ViewModes) {
    const modeObject = this.props.theme[viewMode];

    Object.keys(modeObject).forEach(prop => {
      this.props.element.style.setProperty(`--${kebabCase(prop)}`, modeObject[prop]);
    });
  }

  render() {
    return <></>;
  }
}

interface ThemeEngineProperties {
  viewMode: ViewModes;
}

export function ThemeEngine(props: ThemeEngineProperties) {
  return <Component viewMode={props.viewMode} theme={theme} element={document.documentElement} />;
}
