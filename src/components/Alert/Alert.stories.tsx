import type { Meta, StoryFn } from '@storybook/react';
import { Alert } from './';

export default {
  title: 'Data Display/Alert',
  component: Alert
} as Meta<typeof Alert>;

const Template: StoryFn<typeof Alert> = args => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'The thing finished correctly!'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Be careful when doing the thing!'
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  children: 'The thing failed!'
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: 'Some info on the thing!'
};
