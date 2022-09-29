import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '.';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Cards/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => (
  <StoryCard isContrast isContentFull>
    <Card {...args} />
  </StoryCard>
);

export const Loading = Template.bind({});
Loading.args = {
  label: 'Domain name',
  primaryText: {
    isLoading: true,
    text: 'Domain description'
  },
  secondaryText: {
    isLoading: true,
    text: 'Domain details'
  }
};

export const PartialLoading = Template.bind({});
PartialLoading.args = {
  label: 'Domain name',
  primaryText: {
    isLoading: false,
    text: 'Domain description'
  },
  secondaryText: {
    isLoading: true,
    text: 'Domain details'
  }
};

export const Loaded = Template.bind({});
Loaded.args = {
  label: 'Domain name',
  primaryText: {
    isLoading: false,
    text: 'Domain description'
  },
  secondaryText: {
    isLoading: false,
    text: 'Domain details'
  }
};
