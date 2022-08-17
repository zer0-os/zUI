import React, { ReactNode } from 'react';

import Spinner from './Spinner';

import './LoadingIndicator.module.scss';
import classNames from 'classnames';

export type LoadingIndicatorProps = {
  className?: string;
  text?: string | ReactNode;
  style?: React.CSSProperties;
  spinnerPosition?: 'bottom' | 'left' | 'right';
};

export const TEST_ID = {
  CONTAINER: 'loading-indicator-container',
  SPINNER: 'loading-indicator-spinner',
  TEXT: 'loading-indicator-text'
};

const LoadingIndicator = ({ className, style, text, spinnerPosition = 'bottom' }: LoadingIndicatorProps) => {
  return (
    <div
      style={style}
      className={classNames('zui-loading-indicator', `zui-loading-indicator-${spinnerPosition}`, className)}
      data-testid={TEST_ID.CONTAINER}
    >
      <Spinner data-testid={TEST_ID.SPINNER} />
      {text && (
        <div
          className={classNames('zui-loading-indicator-text', `zui-loading-indicator-text-${spinnerPosition}`)}
          data-testid={TEST_ID.TEXT}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default LoadingIndicator;
