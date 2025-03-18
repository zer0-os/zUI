import type { Meta, StoryFn } from '@storybook/react';
import { Tabs } from '.';

export default {
  title: 'Navigation/Tabs',
  component: Tabs
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = args => {
  return <Tabs {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { text: 'Tab 1', content: 'This is Tab 1 content' },
    { text: 'Tab 2', content: 'This is Tab 2 content' },
    { text: 'Tab 3', content: 'This is Tab 3 content' }
  ]
};
