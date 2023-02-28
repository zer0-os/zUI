import React, { ReactNode } from 'react';
import classnames from 'classnames';

import styles from './Badge.module.scss';

export interface BadgeProps {
  alertState?: boolean;
  className?: string;
  color?: string;
  content: ReactNode;
  type: 'text' | 'count' | 'icon';
}

export const Badge = ({ alertState = false, className, color = '#7F46AA', content, type }: BadgeProps) => {
  return (
    <div
      className={classnames(styles.Badge, className)}
      style={{ backgroundColor: color }}
      data-alert-state={alertState}
      data-content-type={type}
    >
      {content}
    </div>
  );
};
