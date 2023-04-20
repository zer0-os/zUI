import React, { useState } from 'react';

import { Input, InputProps } from './Input';
import { IconEye } from '../../icons';

import styles from './Input.module.scss';

export type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput = (props: PasswordInputProps) => {
  const [valueVisible, setValueVisible] = useState(false);

  function toggleVisiblity() {
    setValueVisible(!valueVisible);
  }

  return (
    <Input {...props} type={valueVisible ? 'text' : 'password'} endEnhancer={<EyeButton onClick={toggleVisiblity} />} />
  );
};

export const EyeButton = (props: { onClick: () => void }) => {
  return (
    <button onClick={props.onClick} className={styles.PasswordButton}>
      <IconEye />
    </button>
  );
};
