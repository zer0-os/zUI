import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ZUIProvider } from '../src/ZUIProvider';
import { ThemeEngine } from '../src/components/ThemeEngine';
import { Button } from '../src/components/Button';

const themeKey = 'viewMode:theme';
const currentTheme = function() {
  return localStorage.getItem(themeKey) || 'dark';
}
export const decorators = [
  Story => {
    const [theme, setTheme] = useState(currentTheme);
    const oppositeTheme = theme === 'light' ? 'dark' : 'light';

    function toggleTheme() {
      setTheme(oppositeTheme);
      localStorage.setItem(themeKey, oppositeTheme);
    }

    return (
      <MemoryRouter initialEntries={['/']}>
        <ZUIProvider>
          <Story />
          <div style={{'margin-top': '25px'}}>
            <Button onClick={toggleTheme}>Switch to {oppositeTheme}</Button>
            <ThemeEngine theme={theme} />;
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
