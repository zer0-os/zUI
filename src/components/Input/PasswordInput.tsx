import React, { useState } from 'react';

import { Input, InputProps } from './Input';
import { IconEye, IconEyeOff } from '../../icons';

import { IconButton } from '../IconButton';

export type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput = (props: PasswordInputProps) => {
  const [isHidden, setIsHidden] = useState(true);

  function toggleVisiblity() {
    setIsHidden(!isHidden);
  }

  return (
    <Input
      {...props}
      type={isHidden ? 'password' : 'text'}
      endEnhancer={<IconButton onClick={toggleVisiblity} Icon={isHidden ? IconEye : IconEyeOff} />}
    />
  );
};
