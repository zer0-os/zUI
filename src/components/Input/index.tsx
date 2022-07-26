import React, { FC, ReactNode } from 'react';
// eslint-disable-next-line import/no-unresolved
import { AriaTextFieldProps } from '@react-types/textfield';

import TextInput from './Input';
import NumberInput from './NumberInput';

import './Input.scss';

export interface InputProps extends Omit<AriaTextFieldProps, 'value' | 'onChange'> {
  className?: string;
  error?: boolean;
  success?: boolean;
  helperText?: string;
  endEnhancer?: ReactNode;
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const Input: FC<InputProps> = props => {
  if (props.type === 'number') {
    return <NumberInput {...props} />;
  }
  return <TextInput {...props} />;
};

export default Input;
