import type { Meta, StoryFn } from '@storybook/react';
import { Card } from '.';

export default {
  title: 'Data Display/Cards/Card',
  component: Card
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = args => <Card {...args} />;

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
