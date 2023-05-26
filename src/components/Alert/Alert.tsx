import React, { ReactNode } from 'react';

import { IconCheck, IconAlertCircle } from '../Icons';

import styles from './Alert.module.scss';
import classNames from 'classnames';

type AlertVariant = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps {
  className?: string;
  variant?: AlertVariant;
  children?: ReactNode;
}

export const Alert = ({ className, variant, children }: AlertProps) => {
  return (
    <div className={classNames(styles.Container, className)} data-variant={variant}>
      <Icon variant={variant} />
      <div>{children}</div>
    </div>
  );
};

interface IconProps {
  variant: AlertVariant;
}

const Icon = ({ variant }: IconProps) => {
  return variant === 'success' ? <IconCheck size={16} /> : <IconAlertCircle size={16} />;
};
