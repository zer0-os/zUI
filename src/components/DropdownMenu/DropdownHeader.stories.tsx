import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as Dropdown from '.';
import { StoryCard } from '../.storybook';
import { Member } from '../Member/Member';

export default {
  title: 'Data Display/DropdownMenu/Header',
  component: Dropdown.Header
} as ComponentMeta<typeof Dropdown.Header>;

const Template: ComponentStory<typeof Dropdown.Header> = args => {
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

export const TextHeader = Template.bind({});
TextHeader.args = {
  item: 'Delicious fruits!'
};

export const ComponentHeader = Template.bind({});
ComponentHeader.args = {
  item: <Member label="Member Label" children={<span>Member Content</span>} />
};
