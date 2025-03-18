import type { Meta, StoryFn } from '@storybook/react';
import { LoadingIndicator } from './';

export default {
  title: 'Data Display/Loader/Loading Indicator',
  component: LoadingIndicator
} as Meta<typeof LoadingIndicator>;

const Template: StoryFn<typeof LoadingIndicator> = args => <LoadingIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Howdy something really really long',
  spinnerPosition: 'right'
};
