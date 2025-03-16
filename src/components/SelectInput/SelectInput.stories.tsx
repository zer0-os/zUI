import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { SelectInput } from './SelectInput';

export default {
  title: 'Inputs/SelectInput',
  component: SelectInput
} as Meta<typeof SelectInput>;

const Template: StoryFn<typeof SelectInput> = args => {
  const [selectedItem, setSelectedItem] = useState('');

  const items = [
    {
      id: 'apple',
      label: 'Apple',
      onSelect: () => setSelectedItem('apple')
    },
    {
      id: 'orange',
      label: 'Orange',
      onSelect: () => setSelectedItem('orange')
    },
    {
      id: 'pear',
      label: 'Pear',
      onSelect: () => setSelectedItem('pear')
    }
  ];

  return <SelectInput {...args} items={items} value={items.find(x => x.id === selectedItem)?.label ?? selectedItem} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Delicious Fruit',
  placeholder: 'Select a fruit...'
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: 'Delicious Fruit',
  placeholder: 'Select a fruit...',
  helperText: 'Some helper text here to help contextualize your input.'
};

export const Alert = Template.bind({});
Alert.args = {
  label: 'Delicious Fruit',
  placeholder: 'Select a fruit...',
  alert: {
    variant: 'success',
    text: 'Fruit choice is delicious!'
  }
};

export const Error = Template.bind({});
Error.args = {
  label: 'Delicious Fruit',
  placeholder: 'Select a fruit...',
  alert: {
    variant: 'error',
    text: 'Not delicious!'
  },
  error: true
};
