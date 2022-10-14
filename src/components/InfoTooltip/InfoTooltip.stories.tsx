import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InfoTooltip } from './InfoTooltip';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Info Tooltip',
  component: InfoTooltip
} as ComponentMeta<typeof InfoTooltip>;

const Template: ComponentStory<typeof InfoTooltip> = args => (
  <StoryCard isContrast>
    <InfoTooltip {...args} />
  </StoryCard>
);

export const Default = Template.bind({});
