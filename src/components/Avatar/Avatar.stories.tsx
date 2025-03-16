import type { Meta, StoryFn } from '@storybook/react';
import { Avatar } from './';

export default {
  title: 'Data Display/Avatar',
  component: Avatar
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  statusType: 'active',
  badgeContent: '9+',
  imageURL: 'https://picsum.photos/200/300'
};

export const OnlyStatus = Template.bind({});
OnlyStatus.args = {
  statusType: 'active',
  imageURL: 'https://picsum.photos/200/300'
};

export const onlyBadge = Template.bind({});
onlyBadge.args = {
  badgeContent: '9+',
  imageURL: 'https://picsum.photos/200/300'
};

export const Icon = Template.bind({});
Icon.args = {
  statusType: 'active',
  badgeContent: '9+'
};

export const OnlyAvatar = Template.bind({});
OnlyAvatar.args = {
  imageURL: 'https://picsum.photos/200/300'
};

export const DisabledTabIndex = Template.bind({});
DisabledTabIndex.args = {
  imageURL: 'https://picsum.photos/200/300',
  tabIndex: -1
};
