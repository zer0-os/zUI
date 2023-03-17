import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Status } from './';

export default {
  title: 'Data Display/Status',
  component: Status
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = args => <Status {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'active'
};
