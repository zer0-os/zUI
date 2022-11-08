import React from 'react';

import { Address } from '.';
import { StoryCard } from '../.storybook';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/Address',
  component: Address
} as ComponentMeta<typeof Address>;

const Template: ComponentStory<typeof Address> = args => {
  return (
    <StoryCard isContrast>
      <Address {...args} />
    </StoryCard>
  );
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
