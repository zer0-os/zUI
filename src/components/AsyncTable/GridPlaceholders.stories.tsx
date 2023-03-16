import React from 'react';

import { GridPlaceholders } from './Placeholder';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/Table/GridPlaceholders',
  component: GridPlaceholders
} as ComponentMeta<typeof GridPlaceholders>;

const Template: ComponentStory<typeof GridPlaceholders> = args => {
  return (
    <div>
      <GridPlaceholders {...args} />
    </div>
  );
};

export const PlaceholderGrid = Template.bind({});
PlaceholderGrid.args = {
  amount: 3
};
