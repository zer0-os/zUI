import React from 'react';

import classNames from 'classnames';
import styles from './Status.module.scss';

const cx = classNames.bind(styles);

export interface StatusProps {
  type: 'active' | 'idle' | 'busy' | 'offline' | 'unread';
}

export const Status = ({ type = 'offline' }: StatusProps) => {
  return <div className={styles.Status} data-status-type={type}></div>;
};
