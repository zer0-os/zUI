import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryCard } from '../.storybook';
import { Link } from './';

export default {
  title: 'Navigation/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => {
  return (
    <StoryCard isContrast>
      <Link {...args} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  to: '/home',
  children: 'Default Link'
};

export const AsButton = Template.bind({});
AsButton.args = {
  children: 'Button link',
  onClick: () => alert('Button clicked!'),
  as: 'button'
};

export const AsBackButton = Template.bind({});
AsBackButton.args = {
  children: 'Back',
  onClick: () => alert('Button clicked!'),
  as: 'back'
};
