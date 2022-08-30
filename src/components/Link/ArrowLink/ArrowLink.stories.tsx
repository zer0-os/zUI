import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowLink } from '.';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Data Display/Link/ArrowLink',
  component: ArrowLink
} as ComponentMeta<typeof ArrowLink>;

const Template: ComponentStory<typeof ArrowLink> = args => {
  return (
    <StoryCard>
      <ArrowLink {...args} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
