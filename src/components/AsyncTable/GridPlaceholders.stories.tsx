import { GridPlaceholders } from './Placeholder';

import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Data Display/Table/GridPlaceholders',
  component: GridPlaceholders
} as Meta<typeof GridPlaceholders>;

const Template: StoryFn<typeof GridPlaceholders> = args => {
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
