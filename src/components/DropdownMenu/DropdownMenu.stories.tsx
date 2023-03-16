import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropdownMenu } from './';

import { IconArrowDownLeft } from '../Icons';

export default {
  title: 'Inputs/DropdownMenu',
  component: DropdownMenu
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = args => {
  return (
    <DropdownMenu
      {...args}
      items={[
        {
          id: 'dropdown_menu_1',
          label: 'Apple',
          onSelect: () => console.log('you clicked Apple!')
        },
        {
          id: 'dropdown_menu_2',
          label: 'Orange',
          onSelect: () => console.log('you clicked Orange!')
        },
        {
          id: 'pear',
          label: 'Pear',
          onSelect: () => console.log('you clicked Pear!')
        }
      ]}
    />
  );
};

export const DefaultTrigger = Template.bind({});

export const TextTrigger = Template.bind({});
TextTrigger.args = {
  trigger: "I'm a dropdown trigger!"
};

export const CustomTrigger = Template.bind({});
CustomTrigger.args = {
  trigger: <IconArrowDownLeft />
};
