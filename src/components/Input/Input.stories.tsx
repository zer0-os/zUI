import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './';
import { Button } from '../Button';
import { StoryCard } from '../.storybook';

export default {
  title: 'Inputs/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
  const [value, setValue] = useState<string>('');

  return (
    <StoryCard isContentFull>
      <Input {...args} value={value} onChange={setValue} />
    </StoryCard>
  );
};

export const Text = Template.bind({});
Text.args = { label: 'NFT Name', placeholder: 'NFT Name' };

export const Number = Template.bind({});
Number.args = { type: 'number', label: 'Bid Amount (ETH)', placeholder: 'Bid Amount (ETH)' };

export const Error = Template.bind({});
Error.args = {
  value: 'zero.Domain',
  label: 'Domain zNA',
  placeholder: 'Domain zNA',
  error: true,
  helperText: 'Domain zNAs must be lowercase.'
};

export const Success = Template.bind({});
Success.args = {
  value: 'zero.domain',
  label: 'Domain zNA',
  placeholder: 'Domain zNA',
  success: true,
  helperText: 'Domain zNA is available!'
};

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
