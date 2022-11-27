import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RangeSlider } from './RangeSlider';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Sliders/Range Slider',
  component: RangeSlider
} as ComponentMeta<typeof RangeSlider>;

const Template: ComponentStory<typeof RangeSlider> = args => (
  <StoryCard isContrast>
    <RangeSlider {...args} />
  </StoryCard>
);

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  isSmall: false,
  isLight: false
};

export const Light = Template.bind({});
Light.args = {
  min: 0,
  max: 100,
  step: 1,
  isSmall: false,
  isLight: true
};

export const Small = Template.bind({});
Small.args = {
  min: 0,
  max: 100,
  step: 1,
  isSmall: true,
  isLight: false
};
