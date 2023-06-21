import React, { FC } from 'react';

import { RawInput as TextInput, InputProps as InputPropsComponent } from './RawInput';
import { NumberInput } from './NumberInput';
import { PasswordInput } from './PasswordInput';

export type InputProps = InputPropsComponent;

export const Input: FC<InputPropsComponent> = props => {
  switch (props.type) {
    case 'number':
      return <NumberInput {...props} />;
    case 'password':
      return <PasswordInput {...props} />;
    default:
      return <TextInput {...props} />;
  }
};
