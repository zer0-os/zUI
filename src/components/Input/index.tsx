import React, { FC } from 'react';

import { Input as TextInput, InputProps as InputPropsComponent } from './Input';
import { NumberInput } from './NumberInput';

export type InputProps = InputPropsComponent;

export const Input: FC<InputPropsComponent> = props => {
  return props.type === 'number' ? <NumberInput {...props} /> : <TextInput {...props} />;
};
