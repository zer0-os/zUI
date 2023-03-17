import React from 'react';

import { RowPlaceholders } from './Placeholder';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/Table/RowPlaceholders',
  component: RowPlaceholders
} as ComponentMeta<typeof RowPlaceholders>;

const Template: ComponentStory<typeof RowPlaceholders> = args => {
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
