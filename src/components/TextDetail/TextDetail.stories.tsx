import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextDetail } from './';
import { StoryCard } from '../.storybook';

export default {
  title: 'Text Detail',
  component: TextDetail
} as ComponentMeta<typeof TextDetail>;

const Template: ComponentStory<typeof TextDetail> = args => {
  return (
    <StoryCard isContrast>
      <TextDetail primaryText={'Hello'} secondaryText={'Howdy'} label={'Hey'} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
