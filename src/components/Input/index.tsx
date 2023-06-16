import React, { FC } from 'react';

import { Input as TextInput, InputProps as InputPropsComponent } from './Input';
import { NumberInput } from './NumberInput';
import { PasswordInput } from './PasswordInput';
import { SearchInput } from './SearchInput';

export type InputProps = InputPropsComponent;

export const Input: FC<InputPropsComponent> = props => {
  switch (props.type) {
    case 'number':
      return <NumberInput {...props} />;
    case 'password':
      return <PasswordInput {...props} />;
    case 'search':
      return <SearchInput {...props} />;
    default:
      return <TextInput {...props} />;
  }
};
