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
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
  const diffInMinutes = diffInMilliseconds / (1000 * 60);
  const diffInSeconds = diffInMilliseconds / 1000;

  let dateString;

  if (diffInHours < 24) {
    if (diffInSeconds < 10) {
      dateString = 'Just now';
    } else if (diffInMinutes < 1) {
      const seconds = Math.floor(diffInSeconds);
      dateString = `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    } else if (diffInHours < 1) {
      const minutes = Math.floor(diffInMinutes);
      dateString = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      const hours = Math.floor(diffInHours);
      dateString = `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    }
  } else {
    dateString = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  }

  return {
    dateString
  };
};
