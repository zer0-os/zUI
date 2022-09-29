import { AsyncText } from '../../lib/types';
import React, { FC } from 'react';
import { Skeleton } from '../Skeleton';

import styles from './TextDetail.module.scss';

export interface TextDetailProps {
  label: string;
  primaryText: AsyncText | string;
  secondaryText: AsyncText | string;
}

export const TextDetail: FC<TextDetailProps> = ({ label, primaryText, secondaryText }) => {
  return (
    <div className={styles.Container}>
      <label>{label}</label>
      <span className={styles.Value}>
        {typeof primaryText === 'object' ? (
          <>{primaryText.isLoading ? <Skeleton width={'50%'} /> : primaryText.text ?? 'ERR'}</>
        ) : (
          primaryText
        )}
      </span>
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
