import React, { FC, ReactNode } from 'react';

import { TEST_ID } from './Card.constants';

import Skeleton from '../Skeleton';
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

const Card: FC<CardProps> = ({ title, value, bottomText }) => (
  <div data-testid={TEST_ID.container} className={styles.Container}>
    <label>{title}</label>
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

export default Card;
