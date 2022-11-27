import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StandardSlider } from './StandardSlider';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Sliders/Standard Slider',
  component: StandardSlider
} as ComponentMeta<typeof StandardSlider>;

const Template: ComponentStory<typeof StandardSlider> = args => {
  return (
    <StoryCard isContrast>
      <StandardSlider {...args} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  isSmall: false,
  isLight: false,
  value: 50
};

export const Light = Template.bind({});
Light.args = {
  min: 0,
  max: 100,
  step: 1,
  isSmall: false,
  isLight: true,
  value: 50
};

export const Small = Template.bind({});
Small.args = {
  min: 0,
  max: 100,
  step: 1,
  isSmall: true,
  isLight: false,
  value: 50
};
