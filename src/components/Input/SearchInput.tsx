import React from 'react';

import { IconSearchMd } from '../Icons';
import { Input, InputProps } from './Input';

import classNames from 'classnames';
import styles from './SearchInput.module.scss';

//////////////////
// Search Input //
//////////////////

export type SearchInputProps = Omit<InputProps, 'type'>;

export const SearchInput = ({ wrapperClassName, startEnhancer, ...props }: SearchInputProps) => {
  return (
    <Input
      wrapperClassName={classNames(styles.SearchWrapper, wrapperClassName)}
      startEnhancer={startEnhancer ?? <SearchEnhancer isSearching={Boolean(props.value)} />}
      {...props}
    />
  );
};

/////////////////////
// Search Enhancer //
/////////////////////

interface SearchEnhancerProps {
  isSearching: boolean;
}

const SearchEnhancer = ({ isSearching }: SearchEnhancerProps) => {
  return (
    <div data-is-searching={isSearching ? '' : undefined} className={styles.SearchIcon}>
      <IconSearchMd data-test-id={'icon-search-md'} size={16} />
    </div>
  );
};
