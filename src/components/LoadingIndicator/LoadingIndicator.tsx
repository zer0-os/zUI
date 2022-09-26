import React, { ReactNode } from 'react';

import { Spinner } from './Spinner';

import './LoadingIndicator.scss';
import classNames from 'classnames';

export type LoadingIndicatorProps = {
  className?: string;
  message?: ReactNode;
  spinnerPosition?: 'bottom' | 'left' | 'right';
};

export const LoadingIndicator = ({ className, message, spinnerPosition = 'bottom' }: LoadingIndicatorProps) => {
  return (
    <div className={classNames('zui-loading-indicator', `zui-loading-indicator-${spinnerPosition}`, className)}>
      <Spinner />
      {message && (
        <div
          className={classNames('zui-loading-indicator-message', `zui-loading-indicator-message-${spinnerPosition}`)}
        >
          {message}
        </div>
      )}
    </div>
  );
};
