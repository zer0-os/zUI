import React, { ReactNode } from 'react';

import { IconAlertCircle, IconCheck, IconInfoCircle } from '../Icons';

import styles from './Alert.module.scss';
import classNames from 'classnames';

type AlertVariant = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps {
  className?: string;
  variant?: AlertVariant;
  children?: ReactNode;
  isFilled?: boolean;
}

export const Alert = ({ className, variant, children, isFilled = false }: AlertProps) => {
  return (
    <div className={classNames(styles.Container, { [styles.isFilled]: isFilled }, className)} data-variant={variant}>
      {IconVariant[variant]}
      <div>{children}</div>
    </div>
  );
};

const IconVariant: Record<AlertVariant, ReactNode> = {
  success: <IconCheck size={16} isFilled={true} />,
  error: <IconAlertCircle size={16} isFilled={true} />,
  warning: <IconAlertCircle size={16} isFilled={true} />,
  info: <IconInfoCircle size={16} isFilled={true} />
};
