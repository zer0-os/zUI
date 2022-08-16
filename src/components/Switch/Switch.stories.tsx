import React from 'react';
import SwitchRadix from './';
import { StoryCard } from '../.storybook/StoryCard';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Switch',
  component: SwitchRadix
} as ComponentMeta<typeof SwitchRadix>;

const Template: ComponentStory<typeof SwitchRadix> = args => (
  <StoryCard isContrast>
    <SwitchRadix {...args} />
  </StoryCard>
);

export const Primary = Template.bind({});
Primary.args = {
  id: "hello",
  defaultChecked: true
};
