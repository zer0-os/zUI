import type { Meta, StoryFn } from '@storybook/react';
import { Modal } from './';

export default {
  title: 'Data Display/Modal',
  component: Modal
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = args => {
  return <Modal {...args}>Hello! This is a modal</Modal>;
};

export const Default = Template.bind({});
Default.args = {
  trigger: 'Click me!'
};
