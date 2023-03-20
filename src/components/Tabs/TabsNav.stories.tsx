import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TabsNav } from '.';

export default {
  title: 'Navigation/Tabs Nav',
  component: TabsNav
} as ComponentMeta<typeof TabsNav>;

const Template: ComponentStory<typeof TabsNav> = args => {
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
