import React from 'react';

import { Input, InputProps } from '../Input';
import { IconSearchMd } from '../Icons';

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
      className={className}
      onChange={onQueryStringChange}
      startEnhancer={<IconSearchMd size={16} />}
      value={queryString}
      placeholder={placeholder ?? 'Search'}
      isDisabled={isDisabled}
    />
  );
};
