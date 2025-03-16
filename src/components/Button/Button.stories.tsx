import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';

import { IconUserPlus1 } from '../Icons';

export default {
  title: 'Inputs/Button',
  component: Button
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

export const Negative = Template.bind({});
Negative.args = {
  variant: 'negative'
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};

export const StartEnhancer = Template.bind({});
StartEnhancer.args = {
  startEnhancer: <IconUserPlus1 />
};

export const EndEnhancer = Template.bind({});
EndEnhancer.args = {
  endEnhancer: <IconUserPlus1 />
};
