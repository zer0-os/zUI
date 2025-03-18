import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { Preview } from '@storybook/react';
import { ZUIProvider } from '../src/ZUIProvider';
import { ThemeEngine } from '../src/components/ThemeEngine';

const preview: Preview = {
  parameters: {
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
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { title: 'Dark', value: 'dark', right: '🌙' },
          { title: 'Light', value: 'light', right: '☀️' }
        ],
        showName: true,
        dynamicTitle: true
      }
    }
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      return (
        <MemoryRouter initialEntries={['/']}>
          <ZUIProvider>
            <div style={{ display: 'flex' }}>
              <Story />
            </div>
            <ThemeEngine theme={theme} />
          </ZUIProvider>
        </MemoryRouter>
      );
    }
  ]
};

export default preview;
