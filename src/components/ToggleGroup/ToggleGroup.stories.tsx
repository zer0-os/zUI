/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToggleGroup } from './';
import { StoryCard } from '../.storybook';
import { IconArrowLeft, IconArrowDown, IconArrowDownRight } from '../Icons';

export default {
  title: 'Inputs/Toggle Group',
  component: ToggleGroup
} as ComponentMeta<typeof ToggleGroup>;

const DEFAULT_LABELS = [
  {
    key: '1',
    label: 'Kia ora koutou katoa'
  },
  {
    key: '2',
    label: 'Guten tag euch allen'
  },
  {
    key: '3',
    label: 'नमस्ते सभी को',
    isDisabled: true
  }
];

const DEFAULT_ICONS = [
  {
    key: '1',
    icon: <IconArrowLeft />
  },
  {
    key: '2',
    icon: <IconArrowDown />
  },
  {
    key: '3',
    icon: <IconArrowDownRight />,
    isDisabled: true
  }
];

const SingleSelectTemplate: ComponentStory<any> = args => {
  const [selection, setSelection] = useState<string | undefined>(args?.selection);

  return (
    <StoryCard isContrast>
      <ToggleGroup {...args} selectionType={'single'} selection={selection} onSelectionChange={setSelection} />
    </StoryCard>
  );
};

const MultiSelectTemplate: ComponentStory<any> = args => {
  const [selection, setSelection] = useState<string[]>(args?.selection ?? []);

  return (
    <StoryCard isContrast>
      <ToggleGroup {...args} selectionType={'multiple'} selection={selection} onSelectionChange={setSelection} />
    </StoryCard>
  );
};

export const Default = SingleSelectTemplate.bind({});
Default.args = {
  options: DEFAULT_LABELS
};

export const Required = SingleSelectTemplate.bind({});
Required.args = {
  options: DEFAULT_LABELS,
  selection: DEFAULT_LABELS[0].key,
  isRequired: true
};

export const Disabled = SingleSelectTemplate.bind({});
Disabled.args = {
  options: DEFAULT_LABELS,
  isDisabled: true
};

export const WithIcons = SingleSelectTemplate.bind({});
WithIcons.args = {
  options: DEFAULT_ICONS
};

export const Minimal = SingleSelectTemplate.bind({});
Minimal.args = {
  options: DEFAULT_LABELS,
  variant: 'minimal'
};

export const MinimalWithIcons = SingleSelectTemplate.bind({});
MinimalWithIcons.args = {
  options: DEFAULT_ICONS,
  variant: 'minimal'
};

export const MultiSelectRequired = MultiSelectTemplate.bind({});
MultiSelectRequired.args = {
  options: DEFAULT_LABELS,
  selection: [DEFAULT_LABELS[0].key],
  isRequired: true
};

export const MultiSelectOptional = MultiSelectTemplate.bind({});
MultiSelectOptional.args = {
  options: DEFAULT_LABELS
};
