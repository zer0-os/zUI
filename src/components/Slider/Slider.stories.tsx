import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Slider } from './Slider';
import { StoryCard } from '../.storybook';

export default {
  title: 'Slider',
  component: Slider
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = args => (
  <StoryCard isContrast>
    <Slider {...args} />
  </StoryCard>
);

const LightTheme: ComponentStory<typeof Slider> = args => (
  <StoryCard>
    <Slider {...args} />
  </StoryCard>
);

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  onValueChange: (value: number[]) => {
    console.log(value);
  },
  isRangeSlider: false
};

export const Range = Template.bind({});
Range.args = {
  min: 0,
  max: 100,
  step: 1,
  minStep: 10,
  onValueChange: (value: number[]) => {
    console.log(value);
  },
  isRangeSlider: true
};

export const Small = Template.bind({});
Small.args = {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  onValueChange: (value: number[]) => {
    console.log(value);
  },
  size: 'small',
  isRangeSlider: false
};

export const SmallRange = Template.bind({});
SmallRange.args = {
  min: 0,
  max: 100,
  step: 1,
  minStep: 10,
  onValueChange: (value: number[]) => {
    console.log(value);
  },
  size: 'small',
  isRangeSlider: true
};

export const Light = LightTheme.bind({});
Light.args = {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  onValueChange: (value: number[]) => {
    console.log(value);
  },
  isRangeSlider: false
};

export const LightRange = LightTheme.bind({});
LightRange.args = {
  min: 0,
  max: 100,
  step: 1,
  minStep: 10,
  onValueChange: (value: number[]) => {
    console.log(value);
  },
  isRangeSlider: true
};

export const SmallLightRange = LightTheme.bind({});
SmallLightRange.args = {
  min: 0,
  max: 100,
  step: 1,
  minStep: 10,
  onValueChange: (value: number[]) => {
    console.log(value);
  },
  size: 'small',
  isRangeSlider: true
};
