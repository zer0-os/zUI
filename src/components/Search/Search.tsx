import React from 'react';

import { Input, InputProps } from '../Input';
import { IconSearchMd } from '../Icons';

import classNames from 'classnames';
import styles from './Search.module.scss';

export interface SearchProps {
  className?: string;
  placeholder?: string;
  queryString?: string;
  onQueryStringChange: (value: string) => void;
  isDisabled?: InputProps['isDisabled'];
}

export const Search = ({ className, placeholder, queryString, onQueryStringChange, isDisabled }: SearchProps) => {
  return (
    <Input
      className={classNames(styles.Container, className)}
      onChange={onQueryStringChange}
      startEnhancer={<IconSearchMd size={16} />}
      value={queryString}
      placeholder={placeholder ?? 'Search'}
      isDisabled={isDisabled}
    />
  );
};
