import type { Meta, StoryFn } from '@storybook/react';
import { Status } from './';

export default {
  title: 'Data Display/Status',
  component: Status
} as Meta<typeof Status>;

const Template: StoryFn<typeof Status> = args => <Status {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'active'
};
