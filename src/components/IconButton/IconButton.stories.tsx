import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from './';
import { StoryCard } from '../.storybook';
import { IconXClose } from '../Icons';

export default {
  title: 'Inputs/IconButton',
  component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => {
  return (
    <StoryCard>
      <IconButton {...args} />
    </StoryCard>
  );
};

export const CloseIcon = Template.bind({ title: 'Close Icon Button' });
CloseIcon.args = {
  onClick: (): void => null,
  Icon: IconXClose
};
