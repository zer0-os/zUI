import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => (
  <StoryCard isContrast>
    <Avatar {...args} />
  </StoryCard>
);

export const Default = Template.bind({});
Default.args = {
  statusType: 'active',
  badgeContent: '9+',
  userFriendlyName: 'Mic Brooklyn',
  imageURL: 'https://picsum.photos/200/300'
};

export const Square = Template.bind({});
Square.args = {
  type: 'square',
  statusType: 'active',
  badgeContent: '9+',
  userFriendlyName: 'Mic Brooklyn',
  imageURL: 'https://picsum.photos/200/300'
};

export const OnlyStatus = Template.bind({});
OnlyStatus.args = {
  statusType: 'active',
  userFriendlyName: 'Mic Brooklyn',
  imageURL: 'https://picsum.photos/200/300'
};

export const onlyBadge = Template.bind({});
onlyBadge.args = {
  badgeContent: '9+',
  userFriendlyName: 'Mic Brooklyn',
  imageURL: 'https://picsum.photos/200/300'
};

export const Username = Template.bind({});
Username.args = {
  statusType: 'active',
  badgeContent: '9+',
  userFriendlyName: 'Mic Brooklyn'
};

export const Icon = Template.bind({});
Icon.args = {
  statusType: 'active',
  badgeContent: '9+'
};

export const OnlyAvatar = Template.bind({});
OnlyAvatar.args = {
  userFriendlyName: 'Mic Brooklyn',
  imageURL: 'https://picsum.photos/200/300'
};
