import React, { useState } from 'react';

import { IconButton } from '../IconButton';
import { RawInput, InputProps } from './RawInput';
import { IconEye, IconEyeOff } from '../Icons';

export type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput = (props: PasswordInputProps) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisiblity = () => {
    setIsHidden(!isHidden);
  };

  return (
    <RawInput
      endEnhancer={<IconButton Icon={isHidden ? IconEye : IconEyeOff} onClick={toggleVisiblity} type={'button'} />}
      type={isHidden ? 'password' : 'text'}
      {...props}
    />
  );
};
