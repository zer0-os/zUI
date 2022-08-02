import React from 'react';
import SwitchRadix from './';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Switch',
  component: SwitchRadix
} as ComponentMeta<typeof SwitchRadix>;

const Template: ComponentStory<typeof SwitchRadix> = args => <SwitchRadix {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'hello'
};
