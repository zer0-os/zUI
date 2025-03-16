import type { Meta, StoryFn } from '@storybook/react';
import { TabsNav } from '.';

export default {
  title: 'Navigation/Tabs Nav',
  component: TabsNav
} as Meta<typeof TabsNav>;

const Template: StoryFn<typeof TabsNav> = args => {
  return <TabsNav {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { text: 'Tab 1', to: '#' },
    { text: 'Tab 2', to: '#' },
    { text: 'Tab 3', to: '#' }
  ]
};
