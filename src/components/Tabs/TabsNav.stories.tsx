import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TabsNav } from '.';
import { StoryCard } from '../.storybook';

export default {
  title: 'Navigation/Tabs Nav',
  component: TabsNav
} as ComponentMeta<typeof TabsNav>;

const Template: ComponentStory<typeof TabsNav> = args => {
  return (
    <StoryCard isContrast>
      <TabsNav {...args} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { text: 'Tab 1', to: '#' },
    { text: 'Tab 2', to: '#' },
    { text: 'Tab 3', to: '#' }
  ]
};
