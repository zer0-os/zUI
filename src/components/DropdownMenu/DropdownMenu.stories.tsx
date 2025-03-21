import type { Meta, StoryFn } from '@storybook/react';
import { DropdownMenu } from './';

import { IconArrowDownLeft } from '../Icons';

export default {
  title: 'Inputs/DropdownMenu',
  component: DropdownMenu
} as Meta<typeof DropdownMenu>;

const Template: StoryFn<typeof DropdownMenu> = args => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
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
    </div>
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

export const TriggerWithPointer = Template.bind({});
TriggerWithPointer.args = {
  showArrow: true,
  alignMenu: 'center'
};
