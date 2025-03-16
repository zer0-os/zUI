import type { Meta, StoryFn } from '@storybook/react';
import { Spinner } from './Spinner';

export default {
  title: 'Data Display/Loader/Spinner',
  component: Spinner
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = args => {
  return <Spinner {...args} />;
};

export const Default = Template.bind({});
