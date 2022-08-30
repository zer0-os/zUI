import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ZUIProvider } from '../src/ZUIProvider';
import { ThemeEngine, Theme, DEFAULT_THEME } from '../src/components';

export const decorators = [
  (Story, context) => {
    const theme = context.parameters.theme || context.globals.theme;

    return (
      <MemoryRouter initialEntries={['/']}>
        <ZUIProvider>
          <ThemeEngine theme={theme} />
          <Story />
        </ZUIProvider>
      </MemoryRouter>
    );
  }
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for ZUI components',
    defaultValue: DEFAULT_THEME,
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: Theme.Light, icon: 'circlehollow', title: Theme.Light },
        { value: Theme.Dark, icon: 'circle', title: Theme.Dark },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const parameters = {
  previewTabs: {
    canvas: {
      title: 'Story',
      hidden: false
    }
  },
  controls: {
    expanded: true
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: { showPanel: true }
};
