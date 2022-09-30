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

const SkeletonText = ({ text }: { text: AsyncText | string }) => {
  let el;
  if (typeof text === 'object') {
    // If loading return skeleton, else return text (or ERR if undefined)
    el = text.isLoading ? <Skeleton /> : text.text ?? 'ERR';
  } else {
    el = text;
  }
  return <>{el}</>;
};

export const TextStack: FC<TextStackProps> = ({ className, label, primaryText, secondaryText }) => {
  return (
    <div className={classNames(styles.Container, className)}>
      <label>{label}</label>
      <b className={styles.Primary}>
        <SkeletonText text={primaryText} />
      </b>
      {secondaryText && (
        <span>
          <SkeletonText text={secondaryText} />
        </span>
      )}
    </div>
  );
};
