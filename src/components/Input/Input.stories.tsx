import React, { useRef, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Input } from './Input';
import { Button } from '../Button';

export default {
  title: 'Inputs/Input',
  component: Input
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = args => {
  const [value, setValue] = useState<string>('');

  return <Input {...args} value={value} onChange={setValue} />;
};

export const Text = Template.bind({});
Text.args = { label: 'NFT Name', placeholder: 'NFT Name' };

export const HelperText = Template.bind({});
HelperText.args = {
  label: 'NFT Name',
  placeholder: 'NFT Name',
  helperText: 'Some helper text here to help contextualize your input.'
};

export const Number = Template.bind({});
Number.args = { type: 'number', label: 'Bid Amount (ETH)', placeholder: 'Bid Amount (ETH)' };

export const Password = Template.bind({});
Password.args = { type: 'password', label: 'Password', placeholder: 'Password' };

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'zero.Domain',
  label: 'Domain zNA',
  placeholder: 'Domain zNA',
  isDisabled: true
};

export const StartEnhancer = Template.bind({});
StartEnhancer.args = { placeholder: 'zNA', startEnhancer: '0://' };

export const EndEnhancer = Template.bind({});
EndEnhancer.args = {
  placeholder: 'Token Address',
  endEnhancer: <Button onPress={() => alert('Pressed button!')}>Check</Button>,
  label: 'Token Address'
};

export const Alert = Template.bind({});
Alert.args = {
  placeholder: 'Token Address',
  endEnhancer: <Button onPress={() => alert('Pressed button!')}>Check</Button>,
  label: 'Token Address',
  alert: { variant: 'success', text: 'Token address is valid!' }
};

export const Error = Template.bind({});
Error.args = {
  value: 'zero.Domain',
  label: 'Domain zNA',
  placeholder: 'Domain zNA',
  error: true,
  alert: { variant: 'error', text: 'Domain zNAs must be lowercase.' }
};

export const Search = Template.bind({});
Search.args = {
  placeholder: 'Search',
  type: 'search',
  size: 'small'
};

const RefocusTemplate: StoryFn<typeof Input> = args => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <Input ref={inputRef} {...args} />
      <Button onPress={focusInput}>Focus Input</Button>
    </div>
  );
};

export const Refocus = RefocusTemplate.bind({});
Refocus.args = {
  placeholder: 'Click button to refocus',
  label: 'Refocus Input Example'
};

export const RefocusText = RefocusTemplate.bind({});
RefocusText.args = {
  label: 'NFT Name',
  placeholder: 'Type NFT Name',
  type: 'text'
};

export const RefocusNumber = RefocusTemplate.bind({});
RefocusNumber.args = {
  type: 'number',
  label: 'Bid Amount (ETH)',
  placeholder: 'Enter your bid amount'
};

export const RefocusPassword = RefocusTemplate.bind({});
RefocusPassword.args = {
  type: 'password',
  label: 'Password',
  placeholder: 'Enter your password'
};

export const RefocusSearch = RefocusTemplate.bind({});
RefocusSearch.args = {
  type: 'search',
  label: 'Search',
  placeholder: 'Search here',
  size: 'small'
};

export const RefocusWithStartEnhancer = RefocusTemplate.bind({});
RefocusWithStartEnhancer.args = {
  placeholder: 'zNA',
  startEnhancer: '0://',
  label: 'zNA Address'
};

export const RefocusWithEndEnhancer = RefocusTemplate.bind({});
RefocusWithEndEnhancer.args = {
  placeholder: 'Token Address',
  endEnhancer: <Button onPress={() => alert('Pressed button!')}>Check</Button>,
  label: 'Token Address'
};

export const RefocusWithAlert = RefocusTemplate.bind({});
RefocusWithAlert.args = {
  placeholder: 'Token Address',
  alert: { variant: 'success', text: 'Token address is valid!' },
  label: 'Token Address',
  endEnhancer: <Button onPress={() => alert('Pressed button!')}>Check</Button>
};

export const RefocusWithError = RefocusTemplate.bind({});
RefocusWithError.args = {
  value: 'zero.Domain',
  label: 'Domain zNA',
  placeholder: 'Domain zNA',
  error: true,
  alert: { variant: 'error', text: 'Domain zNAs must be lowercase.' }
};
