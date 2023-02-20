import React from 'react';

import { RowPlaceholders } from './Placeholder';
import { StoryCard } from '../.storybook';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Placeholder Elements/RowPlaceholders',
  component: RowPlaceholders
} as ComponentMeta<typeof RowPlaceholders>;

const Template: ComponentStory<typeof RowPlaceholders> = args => {
  return (
    <StoryCard isContrast>
      <RowPlaceholders {...args} />
    </StoryCard>
  );
};

export const PlaceholderRow = Template.bind({});
PlaceholderRow.args = {
  amount: 3,
  height: 3,
  numColumns: 3
};
