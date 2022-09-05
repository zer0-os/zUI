import React from 'react';
import { capitalize } from 'lodash';
import { StoryCard, ColorSwatch } from '../../index';
import { colorsByGroup, ColorGroups } from './ColorsLegacy.helpers';
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

export const ColorsLegacy = () => {
  return (
    <>
      {ColorGroups.map(colorGroup => (
        <StoryCard
          title={capitalize(colorGroup) + ' Colors'}
          isWrapDisabled
          isContentFull
          containerClassName="colors-story-card"
          key={colorGroup}
        >
          {colorsByGroup(colorGroup).map(({ title, variable, color }) => (
            <ColorSwatch title={title} variable={variable} color={color} key={color} />
          ))}
        </StoryCard>
      ))}
    </>
  );
};
