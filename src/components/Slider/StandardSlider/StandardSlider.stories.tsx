import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StandardSlider } from '../index';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Sliders/Standard Slider',
  component: StandardSlider
} as ComponentMeta<typeof StandardSlider>;

export const Template: ComponentStory<typeof StandardSlider> = args => {
  return (
    <StoryCard isContrast>
      <StandardSlider min={0} max={100} value={20} {...args} />
    </StoryCard>
  );
};
