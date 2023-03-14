import React from 'react';

import { GridPlaceholders } from './Placeholder';
import { StoryCard } from '../.storybook';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/Table/GridPlaceholders',
  component: GridPlaceholders
} as ComponentMeta<typeof GridPlaceholders>;

const Template: ComponentStory<typeof GridPlaceholders> = args => {
  return (
    <StoryCard isContrast>
      <div>
        <GridPlaceholders {...args} />
      </div>
    </StoryCard>
  );
};

export const PlaceholderGrid = Template.bind({});
PlaceholderGrid.args = {
  amount: 3
};
