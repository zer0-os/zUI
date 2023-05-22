import React, { useState } from 'react';

import { Input, InputProps } from './Input';
import { IconEye, IconEyeOff } from '../../icons';

import styles from './Input.module.scss';

export type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput = (props: PasswordInputProps) => {
  const [valueVisible, setValueVisible] = useState(false);

  function toggleVisiblity() {
    setValueVisible(!valueVisible);
  }

  return (
    <Input
      {...props}
      type={valueVisible ? 'text' : 'password'}
      endEnhancer={<EyeButton onClick={toggleVisiblity} isHidden={!valueVisible} />}
    />
  );
};

interface EyeButtonProps {
  isHidden: boolean;
  onClick: () => void;
}

export const EyeButton = ({ isHidden, onClick }: EyeButtonProps) => {
  return (
    <button onClick={onClick} className={styles.PasswordButton} type="button">
      {isHidden ? <IconEye /> : <IconEyeOff />}
    </button>
  );
};
