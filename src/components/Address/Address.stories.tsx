import { Address } from '.';

import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Data Display/Address',
  component: Address
} as Meta<typeof Address>;

const Template: StoryFn<typeof Address> = args => {
  return <Address {...args} />;
};

export const Text = Template.bind({});
Text.args = {
  address: '0x123456789'
};

export const AsyncText = Template.bind({});
AsyncText.args = {
  address: {
    text: '0x123456789',
    isLoading: false
  }
};

export const AsyncTextLoading = Template.bind({});
AsyncTextLoading.args = {
  address: {
    text: '0x123456789',
    isLoading: true
  }
};
