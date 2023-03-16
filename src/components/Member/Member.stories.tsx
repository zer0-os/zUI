import React from 'react';

import { Member } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/Member',
  component: Member
} as ComponentMeta<typeof Member>;

const Template: ComponentStory<typeof Member> = args => {
  return <Member {...args}>{args.children ?? 'John Smith'}</Member>;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Creator'
};

export const Link = Template.bind({});
Link.args = {
  label: 'Creator',
  href: 'href.co.uk'
};
