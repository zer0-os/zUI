import React, { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './LoadingIndicator.module.scss';
import Spinner from './Spinner';

const cx = classNames.bind(styles);

type LoadingIndicatorProps = {
  className?: string;
  text: string | ReactNode;
  subtext?: string | ReactNode;
  style?: React.CSSProperties;
  spinnerPosition?: 'bottom' | 'left';
};

const LoadingIndicator = ({ className, style, text, subtext, spinnerPosition = 'bottom' }: LoadingIndicatorProps) => {
  return (
    <div
      style={style}
      className={cx(styles.Container, className, {
        Left: spinnerPosition === 'left'
      })}
    >
      {spinnerPosition === 'left' && <Spinner />}
      <div className={styles.TextContainer}>{text}</div>
      {subtext && <div className={styles.SubtextContainer}>{subtext}</div>}
      {spinnerPosition !== 'left' && <Spinner />}
    </div>
  );
};

export default LoadingIndicator;
