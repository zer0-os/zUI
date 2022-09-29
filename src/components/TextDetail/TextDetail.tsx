import React, { FC } from 'react';

import classNames from 'classnames';
import { AsyncText } from '../../lib/types';

import { Skeleton } from '../Skeleton';

import styles from './TextDetail.module.scss';

export interface TextDetailProps {
  className?: string;
  label: string;
  primaryText: AsyncText | string;
  secondaryText: AsyncText | string;
}

export const TextDetail: FC<TextDetailProps> = ({ className, label, primaryText, secondaryText }) => {
  return (
    <div className={classNames(styles.Container, className)}>
      <label>{label}</label>
      <b className={styles.Primary}>
        {typeof primaryText === 'object' ? (
          <>{primaryText.isLoading ? <Skeleton width={'50%'} /> : primaryText.text ?? 'ERR'}</>
        ) : (
          primaryText
        )}
      </b>
      {secondaryText && (
        <span>
          {typeof secondaryText === 'object' ? (
            <>{secondaryText.isLoading ? <Skeleton width={'50%'} /> : secondaryText.text ?? 'ERR'}</>
          ) : (
            secondaryText
          )}
        </span>
      )}
    </div>
  );
};
