import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge } from './';
import { StoryCard } from '../.storybook';
import { IconArrowUpRight } from '../Icons';

export default {
  title: 'Data Display/Badge',
  component: Badge
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => (
  <StoryCard isContrast>
    <Badge {...args} />
  </StoryCard>
);

export const Default = Template.bind({});
Default.args = {
  content: '9+',
  type: 'count'
};

export const Icon = Template.bind({});
Icon.args = {
  content: <IconArrowUpRight size={12} />,
  type: 'icon'
};

export const Text = Template.bind({});
Text.args = {
  content: 'TEXT',
  type: 'text'
};

export const Alerted = Template.bind({});
Alerted.args = {
  content: 'TEXT',
  type: 'text',
  alertState: true
};
