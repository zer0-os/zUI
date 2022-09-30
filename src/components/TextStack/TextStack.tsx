import React, { FC } from 'react';

import classNames from 'classnames';
import { AsyncText } from '../../lib/types';

import { Skeleton } from '../Skeleton';

import styles from './TextStack.module.scss';

export interface TextStackProps {
  className?: string;
  label: string;
  primaryText: AsyncText | string;
  secondaryText: AsyncText | string;
}

export const TextStack: FC<TextStackProps> = ({ className, label, primaryText, secondaryText }) => {
  return (
    <div className={classNames(styles.Container, className)}>
      <label>{label}</label>
      <b className={styles.Primary}>
        {typeof primaryText === 'object' ? (
          <>{primaryText.isLoading ? <Skeleton /> : primaryText.text ?? 'ERR'}</>
        ) : (
          primaryText
        )}
      </b>
      {secondaryText && (
        <span>
          {typeof secondaryText === 'object' ? (
            <>{secondaryText.isLoading ? <Skeleton /> : secondaryText.text ?? 'ERR'}</>
          ) : (
            secondaryText
          )}
        </span>
      )}
    </div>
  );
};
