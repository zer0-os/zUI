import React from 'react';

import { AsyncText } from '../../lib/types';

import { SkeletonText } from '../../components/SkeletonText';

import classNames from 'classnames/bind';
import styles from './Address.module.scss';

export interface AddressProps {
  className?: string;
  address: string | AsyncText;
}

export const Address = ({ className, address }: AddressProps) => {
  if (typeof address === 'string') {
    return <span className={className}>{address}</span>;
  }

  return (
    <SkeletonText
      className={classNames(styles.AsyncAddress, className)}
      asyncText={{
        ...address,
        text: address?.text
      }}
    />
  );
};
