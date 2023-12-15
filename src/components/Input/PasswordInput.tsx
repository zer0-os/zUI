import React, { useState } from 'react';

import { IconButton } from '../IconButton';
import { Input, InputProps } from './Input';
import { IconEye, IconEyeOff } from '../Icons';

export type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput = (props: PasswordInputProps) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisiblity = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Input
      endEnhancer={
        <IconButton Icon={isHidden ? IconEye : IconEyeOff} onClick={toggleVisiblity} type={'button'} size={24} />
      }
      type={isHidden ? 'password' : 'text'}
      {...props}
    />
  );
};
