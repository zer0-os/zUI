import React from 'react';

import { AsyncText } from '../../lib/types';
import { truncateAddress } from '../../utils';

import { SkeletonText } from '../..';

import classNames from 'classnames';
import styles from './Address.module.scss';

export interface AddressProps {
  className?: string;
  address: string | AsyncText;
}

export const Address = ({ className, address }: AddressProps) => {
  if (typeof address === 'string') {
    return <span className={classNames(styles.Container, className)}>{truncateAddress(address)}</span>;
  }

  let truncatedAddress;
  if (address?.text) {
    truncatedAddress = truncateAddress(address?.text as string);
  }

  return (
    <SkeletonText
      className={classNames(styles.AsyncAddress, className)}
      as={'span'}
      asyncText={{
        ...address,
        text: truncatedAddress
      }}
    />
  );
};
