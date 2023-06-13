import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ScrollbarDemo } from './ScrollbarDemo';

export default {
  title: 'Demo/ScrollbarDemo',
  component: ScrollbarDemo
} as Meta;

const Template: Story = args => <ScrollbarDemo {...args} />;

export const Default = Template.bind({});
