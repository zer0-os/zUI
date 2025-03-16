import type { Meta, StoryFn } from '@storybook/react';
import { Slider } from './Slider';

export default {
  title: 'Inputs/Slider',
  component: Slider
} as Meta<typeof Slider>;

const Template: StoryFn<typeof Slider> = args => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  isRangeSlider: false
};

export const Range = Template.bind({});
Range.args = {
  min: 0,
  max: 100,
  step: 1,
  minStep: 10,
  isRangeSlider: true
};

export const Small = Template.bind({});
Small.args = {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  size: 'small',
  isRangeSlider: false
};

export const SmallRange = Template.bind({});
SmallRange.args = {
  min: 0,
  max: 100,
  step: 1,
  minStep: 10,
  size: 'small',
  isRangeSlider: true
};
