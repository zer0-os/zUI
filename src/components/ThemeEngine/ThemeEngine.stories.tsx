import React, { useState } from 'react';
import { capitalize } from 'lodash';
import { StoryCard } from '../.storybook';
import { BASE_CLASSNAME } from '../Tooltip';
import Button from '../Button';
import { ThemeEngine as ThemeEngineComponent, Theme, DEFAULT_THEME } from './';

export default {
  title: 'Style Guide/ThemeEngine',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    },
    options: { showPanel: false }
  }
};

export const ThemeEngine = () => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  const toggleTheme = () => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);

  return (
    <>
      <StoryCard isContrast>
        <Button onPress={toggleTheme}>Switch Theme</Button>
      </StoryCard>

      <ThemeEngineComponent theme={theme} />

      <StoryCard
        className={`${BASE_CLASSNAME}__storycard`}
        style={{
          backgroundColor: 'var(--zui-primary-12)'
        }}
      >
        <span style={{ color: 'var(--zui-gray-1)' }}>{capitalize(theme)}</span>
      </StoryCard>
    </>
  );
};
