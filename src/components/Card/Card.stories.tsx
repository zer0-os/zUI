import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '.';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => (
  <StoryCard isContrast isContentFull>
    <Card {...args} />
  </StoryCard>
);

export const Loading = Template.bind({});
Loading.args = {
  title: 'Domain name',
  value: {
    isLoading: true,
    text: 'Domain description'
  },
  bottomText: {
    isLoading: true,
    text: 'Domain details'
  }
};

export const PartialLoading = Template.bind({});
PartialLoading.args = {
  title: 'Domain name',
  value: {
    isLoading: false,
    text: 'Domain description'
  },
  bottomText: {
    isLoading: true,
    text: 'Domain details'
  }
};

export const Loaded = Template.bind({});
Loaded.args = {
  title: 'Domain name',
  value: {
    isLoading: false,
    text: 'Domain description'
  },
  bottomText: {
    isLoading: false,
    text: 'Domain details'
  }
};
