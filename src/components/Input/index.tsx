import React, { FC, ReactNode } from 'react';
// eslint-disable-next-line import/no-unresolved
import { AriaTextFieldProps } from '@react-types/textfield';

import { Input as TextInput } from './Input';
import { NumberInput } from './NumberInput';

export interface InputProps extends Omit<AriaTextFieldProps, 'value' | 'onChange'> {
  className?: string;
  error?: boolean;
  success?: boolean;
  helperText?: string;
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export const Input: FC<InputProps> = props => {
  return props.type === 'number' ? <NumberInput {...props} /> : <TextInput {...props} />;
};
