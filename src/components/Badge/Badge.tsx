import React, { ReactNode } from 'react';
import classnames from 'classnames';

import styles from './Badge.module.scss';

export interface BadgeProps {
  className?: string;
  content: ReactNode;
  variant: 'active' | 'busy' | 'idle' | 'offline' | 'unread' | 'error';
  type: 'icon' | 'number' | 'text';
}

export const Badge = ({ className, content, variant, type }: BadgeProps) => {
  return (
    <div className={classnames(styles.Badge, className)} data-variant={variant} data-content-type={type}>
      {type === 'number' && Number(content) > 9 ? '9+' : content}
    </div>
  );
};
