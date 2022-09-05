import React from 'react';
import { capitalize, kebabCase } from 'lodash';
import { StoryCard, ColorSwatch } from '../../index';
import { CSS_PREFIX } from '../../../constants';
import { COLOR_GROUPS } from './Colors.constants';
import '../Styles.stories.scss';

export default {
  title: 'Style Guide/Colors',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    },
    options: { showPanel: false }
  }
};

export const Colors = () => {
  return (
    <>
      {COLOR_GROUPS.map(({ title, colorKeys }) => (
        <StoryCard
          title={capitalize(title)}
          isWrapDisabled
          isContentFull
          containerClassName="colors-story-card"
          key={title}
        >
          {colorKeys.map(colorKey => {
            const color = `var(--${CSS_PREFIX}-${kebabCase(colorKey)})`;
            return <ColorSwatch title={colorKey} variable={color} color={color} key={colorKey} />;
          })}
        </StoryCard>
      ))}
    </>
  );
};
