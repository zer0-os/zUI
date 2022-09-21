import React, { ReactNode } from 'react';

import { Spinner } from './Spinner';

import './LoadingIndicator.scss';
import classNames from 'classnames';

export type LoadingIndicatorProps = {
  className?: string;
  text?: string | ReactNode;
  spinnerPosition?: 'bottom' | 'left' | 'right';
};

export const LoadingIndicator = ({ className, text, spinnerPosition = 'bottom' }: LoadingIndicatorProps) => {
  return (
    <div className={classNames('zui-loading-indicator', `zui-loading-indicator-${spinnerPosition}`, className)}>
      <Spinner />
      {text && (
        <div className={classNames('zui-loading-indicator-text', `zui-loading-indicator-text-${spinnerPosition}`)}>
          {text}
        </div>
      )}
    </div>
  );
};
