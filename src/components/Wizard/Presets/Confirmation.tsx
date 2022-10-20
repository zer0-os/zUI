import React, { useMemo, ReactNode } from 'react';

import { Buttons, ButtonsProps } from './Buttons';

import classNames from 'classnames/bind';
import styles from './Confirmation.module.scss';

export interface ConfirmationProps extends ButtonsProps {
  error?: string;
  message: ReactNode;
}

export const Confirmation = ({ className, message, error = '', ...rest }: ConfirmationProps) => {
  const isMessageString = useMemo(() => {
    return ['string', 'number'].includes(typeof message);
  }, [message]);

  return (
    <div className={classNames(styles.Container, className)}>
      {isMessageString ? <p className={styles.Message}>{message}</p> : message}
      {error && <p className={styles.Error}>{error}</p>}
      <Buttons {...rest} />
    </div>
  );
};
