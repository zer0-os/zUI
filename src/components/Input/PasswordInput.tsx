import React, { useState, forwardRef } from 'react';
import { IconButton } from '../IconButton';
import { Input, InputProps } from './Input';
import { IconEye, IconEyeOff } from '../Icons';

export type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Input
      ref={ref}
      endEnhancer={
        <IconButton
          Icon={isHidden ? IconEye : IconEyeOff}
          onClick={toggleVisibility}
          type={'button'}
          size={props.size === 'large' ? 24 : 20}
        />
      }
      type={isHidden ? 'password' : 'text'}
      {...props}
    />
  );
});
