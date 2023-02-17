import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Status } from './';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Status',
  component: Status
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = args => (
  <StoryCard isContrast>
    <Status {...args} />
  </StoryCard>
);

export const Default = Template.bind({});
Default.args = {
  type: 'active'
};
