import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ZUIProvider } from '../src/ZUIProvider';

const queryClient = new QueryClient();

export const decorators = [
  Story => {
    return (
      <MemoryRouter initialEntries={['/']}>
        <ZUIProvider>
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </ZUIProvider>
      </MemoryRouter>
    );
  }
];

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
