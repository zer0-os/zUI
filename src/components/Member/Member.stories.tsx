import React from 'react';

import { Member } from '.';
import { StoryCard } from '../.storybook';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/Member',
  component: Member
} as ComponentMeta<typeof Member>;

const Template: ComponentStory<typeof Member> = args => {
  return (
    <StoryCard isContrast>
      <Member {...args}>{args.children}</Member>
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Member Label',
  children: <span>memeber content</span>
};

export const Link = Template.bind({});
Link.args = {
  label: 'Member Label',
  href: 'href.co.uk',
  children: <span>memeber content</span>
};
