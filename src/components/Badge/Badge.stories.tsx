import type { Meta, StoryFn } from '@storybook/react';
import { Badge } from './';
import { StoryCard } from '../.storybook';
import { IconArrowUpRight } from '../Icons';

export default {
  title: 'Data Display/Badge',
  component: Badge
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = args => (
  <StoryCard isContrast>
    <Badge {...args} />
  </StoryCard>
);

export const Default = Template.bind({});
Default.args = {
  content: 10,
  type: 'number',
  variant: 'unread'
};

export const Icon = Template.bind({});
Icon.args = {
  content: <IconArrowUpRight size={12} />,
  type: 'icon',
  variant: 'unread'
};

export const Text = Template.bind({});
Text.args = {
  content: 'TEXT',
  type: 'text',
  variant: 'unread'
};

export const Error = Template.bind({});
Error.args = {
  content: 'TEXT',
  type: 'text',
  variant: 'error'
};
