import React from 'react';
import classnames from 'classnames';

import styles from './Status.module.scss';

export interface StatusProps {
  type: 'active' | 'idle' | 'busy' | 'offline' | 'unread';
  className?: string;
}

export const Status = ({ type = 'offline', className }: StatusProps) => {
  return <div className={classnames(styles.Status, className)} data-status-type={type}></div>;
};
