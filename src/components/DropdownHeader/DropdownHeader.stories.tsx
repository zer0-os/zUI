import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropdownHeader } from './';
import { StoryCard } from '../.storybook';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { Member } from '../Member/Member';

export default {
  title: 'Data Display/DropdownHeader',
  component: DropdownHeader
} as ComponentMeta<typeof DropdownHeader>;

const Template: ComponentStory<typeof DropdownHeader> = args => {
  return (
    <StoryCard isContrast>
      <DropdownMenu items={[]}>
        <DropdownHeader {...args} />
      </DropdownMenu>
    </StoryCard>
  );
};

export const TextHeader = Template.bind({});
TextHeader.args = {
  item: 'Header example!'
};

export const ComponentHeader = Template.bind({});
ComponentHeader.args = {
  item: <Member label="Member Label" children={<span>Member Content</span>} />
};

const TemplateFull: ComponentStory<typeof DropdownHeader> = args => {
  return (
    <StoryCard isContrast>
      <DropdownMenu
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
        <DropdownHeader {...args} />
      </DropdownMenu>
    </StoryCard>
  );
};

export const TextMenuHeader = TemplateFull.bind({});
TextMenuHeader.args = {
  item: 'Delicious fruits!'
};

export const ComponentMenuHeader = TemplateFull.bind({});
ComponentMenuHeader.args = {
  item: <Member label="Member Label" children={<span>Member Content</span>} />
};
