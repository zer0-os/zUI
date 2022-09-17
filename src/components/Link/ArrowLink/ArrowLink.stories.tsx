import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowLink } from '.';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Navigation/Link',
  component: ArrowLink
} as ComponentMeta<typeof ArrowLink>;

const Template: ComponentStory<typeof ArrowLink> = args => {
  return (
    <StoryCard isContrast>
      <ArrowLink {...args}>Arrow Link</ArrowLink>
    </StoryCard>
  );
};

export const Arrow = Template.bind({});
