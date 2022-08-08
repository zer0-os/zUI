import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoadingIndicator from './';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Loader/Loading Indicator',
  component: LoadingIndicator
} as ComponentMeta<typeof LoadingIndicator>;

const Template: ComponentStory<typeof LoadingIndicator> = args =>  {
  return (
    <StoryCard isContrast>
      <LoadingIndicator {...args} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: 'Howdy something really really long',
  spinnerPosition: 'right',
  subtext: 'Hello'
};
