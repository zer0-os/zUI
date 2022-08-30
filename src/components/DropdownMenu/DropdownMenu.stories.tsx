import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropdownMenu } from './';
import { StoryCard } from '../.storybook';

const DROPDOWN_MENU_ITEMS = [
  {
    id: 'dropdown_nemu_1',
    label: 'Dropdown Menu Item 1',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSelect: () => {}
  },
  {
    id: 'dropdown_nemu_2',
    label: 'Dropdown Menu Item 2',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSelect: () => {}
  },
  {
    id: 'dropdown_nemu_3',
    label: 'Dropdown Menu Item 3',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSelect: () => {}
  }
];

export default {
  title: 'Data Display/DropdownMenu',
  component: DropdownMenu
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = args => {
  return (
    <StoryCard isContrast>
      <DropdownMenu {...args} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: DROPDOWN_MENU_ITEMS
};

export const Custom = Template.bind({});
Custom.args = {
  items: DROPDOWN_MENU_ITEMS,
  trigger: 'Dropdown Menu Item',
  side: 'top',
  alignMenu: 'end'
};
