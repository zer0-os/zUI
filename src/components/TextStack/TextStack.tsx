import React, { FC } from 'react';

import classNames from 'classnames';
import { AsyncText } from '../../lib/types';

import { MaybeSkeletonText } from '../SkeletonText';

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
      <MaybeSkeletonText as={'b'} className={styles.Primary} text={primaryText} />
      {secondaryText && <MaybeSkeletonText as={'span'} text={secondaryText} />}
    </div>
  );
};
