import React, { FC, ReactNode } from 'react';

import { Skeleton } from '../Skeleton';
import styles from './Card.module.scss';

export interface AsyncText {
  text?: string | ReactNode;
  isLoading?: boolean;
}

export interface CardProps {
  title: string;
  value: AsyncText | string | number;
  bottomText?: AsyncText | string | number;
}

const TEST_ID = {
  title: 'zui-card-title',
  value: 'zui-card-value',
  bottomText: 'zui-card-bottom-text'
};

export const Card: FC<CardProps> = ({ title, value, bottomText }) => (
  <div className={styles.Container}>
    <label data-id={TEST_ID.title}>{title}</label>
    <span className={styles.Value}>
      {typeof value === 'object' ? <>{value.isLoading ? <Skeleton width={'50%'} /> : value.text ?? 'ERR'}</> : value}
    </span>
    {bottomText && (
      <span>
        {typeof bottomText === 'object' ? (
          <>{bottomText.isLoading ? <Skeleton width={'50%'} /> : bottomText.text ?? 'ERR'}</>
        ) : (
          bottomText
        )}
      </span>
    )}
  </div>
);
