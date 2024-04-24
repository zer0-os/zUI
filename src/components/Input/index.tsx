import React, { forwardRef } from 'react';

import { Input as TextInput, InputProps as InputPropsComponent } from './Input';
import { NumberInput } from './NumberInput';
import { PasswordInput } from './PasswordInput';
import { SearchInput } from './SearchInput';

export type InputProps = InputPropsComponent;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  switch (props.type) {
    case 'number':
      return <NumberInput ref={ref} {...props} />;
    case 'password':
      return <PasswordInput ref={ref} {...props} />;
    case 'search':
      return <SearchInput ref={ref} {...props} />;
    default:
      return <TextInput ref={ref} {...props} />;
  }
});
