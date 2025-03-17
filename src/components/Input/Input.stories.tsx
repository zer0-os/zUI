import { useRef, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Input } from './Input';
import { Button } from '../Button';
import { NumberInput } from './NumberInput';
import { PasswordInput } from './PasswordInput';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof Input> = {
  title: 'Inputs/Input',
  component: Input
};

export default meta;

type Story = StoryFn<typeof Input>;

const Template: Story = args => {
  const [value, setValue] = useState<string>('');
  return <Input {...args} value={value} onChange={setValue} />;
};

const TemplateNumber: Story = args => {
  const [value, setValue] = useState<string>('');
  return <NumberInput {...args} value={value} onChange={setValue} />;
};

const TemplatePassword: Story = args => {
  const [value, setValue] = useState<string>('');
  return <PasswordInput {...args} value={value} onChange={setValue} />;
};

const TemplateSearch: Story = args => {
  const [value, setValue] = useState<string>('');
  return <SearchInput {...args} value={value} onChange={setValue} />;
};

export const Text = {
  render: Template,
  args: {
    label: 'NFT Name',
    placeholder: 'NFT Name'
  }
};

export const HelperText = {
  render: Template,
  args: {
    label: 'NFT Name',
    placeholder: 'NFT Name',
    helperText: 'Some helper text here to help contextualize your input.'
  }
};

export const Number = {
  render: TemplateNumber,
  args: {
    type: 'number',
    label: 'Bid Amount (ETH)',
    placeholder: 'Bid Amount (ETH)'
  }
};

export const Password = {
  render: TemplatePassword,
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Password'
  }
};

export const Disabled = {
  render: Template,
  args: {
    value: 'zero.Domain',
    label: 'Domain zNA',
    placeholder: 'Domain zNA',
    isDisabled: true
  }
};

export const StartEnhancer = {
  render: Template,
  args: {
    placeholder: 'zNA',
    startEnhancer: '0://'
  }
};

export const EndEnhancer = {
  render: Template,
  args: {
    placeholder: 'Token Address',
    endEnhancer: <Button onPress={() => alert('Pressed button!')}>Check</Button>,
    label: 'Token Address'
  }
};

export const Alert = {
  render: Template,
  args: {
    placeholder: 'Token Address',
    endEnhancer: <Button onPress={() => alert('Pressed button!')}>Check</Button>,
    label: 'Token Address',
    alert: { variant: 'success', text: 'Token address is valid!' }
  }
};

export const Error = {
  render: Template,
  args: {
    value: 'zero.Domain',
    label: 'Domain zNA',
    placeholder: 'Domain zNA',
    error: true,
    alert: { variant: 'error', text: 'Domain zNAs must be lowercase.' }
  }
};

export const Search = {
  render: TemplateSearch,
  args: {
    placeholder: 'Search',
    type: 'search',
    size: 'small'
  }
};

const RefocusTemplate: Story = args => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <Input ref={inputRef} {...args} value={value} onChange={setValue} />
      <Button onPress={focusInput}>Focus Input</Button>
    </div>
  );
};

export const Refocus = {
  render: RefocusTemplate,
  args: {
    placeholder: 'Click button to refocus',
    label: 'Refocus Input Example'
  }
};

export const RefocusText = {
  render: RefocusTemplate,
  args: {
    label: 'NFT Name',
    placeholder: 'Type NFT Name',
    type: 'text'
  }
};

export const RefocusNumber = {
  render: RefocusTemplate,
  args: {
    type: 'number',
    label: 'Bid Amount (ETH)',
    placeholder: 'Enter your bid amount'
  }
};

export const RefocusPassword = {
  render: RefocusTemplate,
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password'
  }
};

export const RefocusSearch = {
  render: RefocusTemplate,
  args: {
    type: 'search',
    label: 'Search',
    placeholder: 'Search here',
    size: 'small'
  }
};

export const RefocusWithStartEnhancer = {
  render: RefocusTemplate,
  args: {
    placeholder: 'zNA',
    startEnhancer: '0://',
    label: 'zNA Address'
  }
};

export const RefocusWithEndEnhancer = {
  render: RefocusTemplate,
  args: {
    placeholder: 'Token Address',
    endEnhancer: <Button onPress={() => alert('Pressed button!')}>Check</Button>,
    label: 'Token Address'
  }
};

export const RefocusWithAlert = {
  render: RefocusTemplate,
  args: {
    placeholder: 'Token Address',
    alert: { variant: 'success', text: 'Token address is valid!' },
    label: 'Token Address',
    endEnhancer: <Button onPress={() => alert('Pressed button!')}>Check</Button>
  }
};

export const RefocusWithError = {
  render: RefocusTemplate,
  args: {
    value: 'zero.Domain',
    label: 'Domain zNA',
    placeholder: 'Domain zNA',
    error: true,
    alert: { variant: 'error', text: 'Domain zNAs must be lowercase.' }
  }
};
