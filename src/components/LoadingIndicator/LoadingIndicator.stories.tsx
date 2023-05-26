import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoadingIndicator } from './';

export default {
  title: 'Data Display/Loader/Loading Indicator',
  component: LoadingIndicator
} as ComponentMeta<typeof LoadingIndicator>;

const Template: ComponentStory<typeof LoadingIndicator> = args => <LoadingIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Howdy something really really long',
  spinnerPosition: 'right'
};
