import { Member } from '.';

import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Data Display/Member',
  component: Member
} as Meta<typeof Member>;

const Template: StoryFn<typeof Member> = args => {
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
