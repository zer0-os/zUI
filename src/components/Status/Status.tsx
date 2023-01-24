import React from 'react';

import styles from './Status.module.scss';

export interface StatusProps {
  type: 'active' | 'idle' | 'busy' | 'offline' | 'unread';
}

export const Status = ({ type = 'offline' }: StatusProps) => {
  return <div className={styles.Status} data-status-type={type}></div>;
};
