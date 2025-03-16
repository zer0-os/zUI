import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ToggleGroup } from './ToggleGroup';
import type { LabelToggle } from './ToggleGroup.types';

import { IconArrowLeft, IconArrowDown, IconArrowDownRight } from '../Icons';

export default {
  title: 'Inputs/ToggleGroup',
  component: ToggleGroup
} as Meta<typeof ToggleGroup>;

const DEFAULT_LABELS: LabelToggle[] = [
  { key: 'left', label: 'Left' },
  { key: 'down', label: 'Down' },
  { key: 'down-right', label: 'Down Right' }
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

const SingleSelectTemplate: StoryFn<typeof ToggleGroup> = args => {
  const [selection, setSelection] = useState<string | undefined>(undefined);

  return (
    <ToggleGroup
      {...args}
      options={DEFAULT_LABELS}
      selectionType="single"
      selection={selection}
      onSelectionChange={setSelection}
      isRequired={false}
      variant="default"
    />
  );
};

const MultiSelectTemplate: StoryFn<typeof ToggleGroup> = args => {
  const [selection, setSelection] = useState<string[]>([]);

  return (
    <ToggleGroup
      {...args}
      options={DEFAULT_LABELS}
      selectionType="multiple"
      selection={selection}
      onSelectionChange={setSelection}
      isRequired={false}
      variant="default"
    />
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
