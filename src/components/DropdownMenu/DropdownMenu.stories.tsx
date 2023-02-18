import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as Dropdown from './';
import { StoryCard } from '../.storybook';
import { IconArrowDownLeft } from '../Icons';
import { Avatar } from '../Avatar';

export default {
  title: 'Data Display/DropdownMenu',
  component: Dropdown.DropdownMenu
} as ComponentMeta<typeof Dropdown.DropdownMenu | typeof Dropdown.Header>;

const Template: ComponentStory<typeof Dropdown.DropdownMenu> = args => {
  return (
    <StoryCard isContrast>
      <Dropdown.DropdownMenu
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
    </StoryCard>
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

const TemplateHeader: ComponentStory<typeof Dropdown.Header> = args => {
  return (
    <StoryCard isContrast>
      <Dropdown.DropdownMenu
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
      >
        <Dropdown.Header {...args} />
      </Dropdown.DropdownMenu>
    </StoryCard>
  );
};

export const TextHeader = TemplateHeader.bind({});
TextHeader.args = {
  item: 'Delicious fruits!'
};

export const ComponentHeader = TemplateHeader.bind({});
ComponentHeader.args = {
  item: (
    <Avatar
      size="regular"
      type="circle"
      badgeContent="+9"
      userFriendlyName="Mic Brooklyn"
      imageURL="https://picsum.photos/200/300"
      statusType="active"
    />
  )
};
