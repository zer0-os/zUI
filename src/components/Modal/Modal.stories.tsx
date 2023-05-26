import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './';

export default {
  title: 'Data Display/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => {
  return <Modal {...args}>Hello! This is a modal</Modal>;
};

export const Default = Template.bind({});
Default.args = {
  trigger: 'Click me!'
};
