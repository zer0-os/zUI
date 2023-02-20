import React from 'react';

import { GridPlaceholders } from './Placeholder';
import { StoryCard } from '../.storybook';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Placeholder Elements/GridPlaceholders',
  component: GridPlaceholders
} as ComponentMeta<typeof GridPlaceholders>;

const Template: ComponentStory<typeof GridPlaceholders> = args => {
  return (
    <StoryCard isContrast>
      <GridPlaceholders {...args} />
    </StoryCard>
  );
};

export const PlaceholderGrid = Template.bind({});
PlaceholderGrid.args = {
  amount: 3
};
