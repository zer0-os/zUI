import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ZUIProvider } from '../src/ZUIProvider';
import { ThemeEngine } from '../src/components/ThemeEngine';
import { Button } from '../src/components/Button';

export const decorators = [
  Story => {
    const [theme, setTheme] = useState('dark');
    const oppositeTheme = theme === 'light' ? 'dark' : 'light';

    function toggleTheme() {
      setTheme(oppositeTheme);
    }

    return (
      <MemoryRouter initialEntries={['/']}>
        <ZUIProvider>
          <Story />
          <div style={{'margin-top': '25px'}}>
            <Button onClick={toggleTheme}>Switch to {oppositeTheme}</Button>
            <ThemeEngine viewMode={theme} />;
          </div>
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
