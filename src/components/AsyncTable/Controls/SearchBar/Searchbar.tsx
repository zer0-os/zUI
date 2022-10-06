//- Type Imports
import type { FC } from 'react';

//- React Imports
import React from 'react';

//- Component Imports
import { IconButton } from '../../../IconButton';
import { IconSearch } from '../Icons';

//- Style Imports
import styles from './SearchBar.module.scss';

type SearchBarProps = {
  placeholder: string;
  onChange?: () => void;
};

export const SearchBar: FC<SearchBarProps> = ({ placeholder, onChange }) => {
  return (
    <div className={styles.Container}>
      <input onChange={onChange} type="text" placeholder={placeholder} />
      <IconButton isTogglable={false} icon={<IconSearch />} />
    </div>
  );
};
