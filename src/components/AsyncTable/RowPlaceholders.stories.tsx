import { RowPlaceholders } from './Placeholder';

import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Data Display/Table/RowPlaceholders',
  component: RowPlaceholders
} as Meta<typeof RowPlaceholders>;

const Template: StoryFn<typeof RowPlaceholders> = args => {
  return (
    <table>
      <tbody>
        <RowPlaceholders {...args} />
      </tbody>
    </table>
  );
};

export const PlaceholderRow = Template.bind({});
PlaceholderRow.args = {
  amount: 3,
  height: 3,
  numColumns: 3
};
