import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Spinner from './Spinner';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Loader/Spinner',
  component: Spinner
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = args => {
  return (
    <StoryCard>
      <Spinner {...args} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
