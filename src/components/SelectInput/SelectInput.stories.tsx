import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectInput } from './SelectInput';
import { StoryCard } from '../.storybook';

export default {
  title: 'Inputs/SelectInput',
  component: SelectInput
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = args => {
  const [selectedItem, setSelectedItem] = React.useState('');

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

  return (
    <StoryCard isContrast>
      <SelectInput {...args} items={items} value={items.find(x => x.id === selectedItem)?.label ?? selectedItem} />
    </StoryCard>
  );
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
