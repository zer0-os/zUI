import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RangeSlider } from './RangeSlider';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Sliders/Range Slider',
  component: RangeSlider
} as ComponentMeta<typeof RangeSlider>;

export const Template: ComponentStory<typeof RangeSlider> = args => {
  return (
    <StoryCard isContrast>
      <RangeSlider min={0} max={100} defaultValue={[0, 100]} {...args} />
    </StoryCard>
  );
};
