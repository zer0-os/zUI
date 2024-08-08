import React, { forwardRef } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

export interface TimestampProps {
  className?: string;
  timestamp: number;
}

export const Timestamp = forwardRef<HTMLSpanElement, TimestampProps>(({ className, timestamp, ...props }, ref) => {
  const { dateString } = useTimestamp(timestamp);

  return (
    <span ref={ref} className={classNames(className, styles.Timestamp)} {...props}>
      {dateString}
    </span>
  );
});

const useTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  const isToday = date.toDateString() === new Date().toDateString();

  const dateString = isToday
    ? date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    : date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });

  return {
    dateString
  };
};
