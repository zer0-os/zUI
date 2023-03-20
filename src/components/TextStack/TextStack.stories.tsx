import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextStack } from './';

export default {
  title: 'Typography/Text Detail',
  component: TextStack
} as ComponentMeta<typeof TextStack>;

const Template: ComponentStory<typeof TextStack> = args => {
  return <TextStack {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  primaryText: 'Primary Text',
  secondaryText: 'Secondary Text'
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Top Bid ($MOCK)',
  primaryText: {
    isLoading: true
  },
  secondaryText: {
    isLoading: true
  }
};

export const PartialLoading = Template.bind({});
PartialLoading.args = {
  label: 'Top Bid ($MOCK)',
  primaryText: {
    isLoading: false,
    text: '1,234.56'
  },
  secondaryText: {
    isLoading: true
  }
};
