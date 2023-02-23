import React, { forwardRef, ReactNode } from 'react';

import { ToggleGroup } from '../ToggleGroup';
import { IconGrid1, IconRows3 } from '../Icons';
import { Search as SearchComponent, SearchProps } from '../Search';

import styles from './Controls.module.scss';

/************************
 * Controls
 *
 * Wraps all controls for the table - search, view toggle, etc.
 * Effectively just wraps them in a flexbox and aligns them.
 ***********************/

export interface ControlsProps {
  children: ReactNode;
}

export const Controls = forwardRef<HTMLDivElement, ControlsProps>(({ children }: ControlsProps, ref) => {
  return (
    <div className={styles.Container} ref={ref}>
      {children}
    </div>
  );
});

/************************
 * View toggle
 ***********************/

export enum View {
  TABLE = 'table',
  GRID = 'grid'
}

const VIEW_OPTIONS = [
  {
    key: View.TABLE,
    icon: <IconRows3 isFilled={true} />
  },
  {
    key: View.GRID,
    icon: <IconGrid1 isFilled={true} />
  }
];

export interface ViewToggleProps {
  onChange: (view: View) => void;
  view: View;
}

export const ViewToggle = forwardRef<HTMLDivElement, ViewToggleProps>(({ onChange, view }: ViewToggleProps, ref) => {
  return (
    <ToggleGroup
      ref={ref}
      className={styles.Toggle}
      selection={view}
      selectionType={'single'}
      onSelectionChange={onChange}
      options={VIEW_OPTIONS}
      variant={'minimal'}
      isRequired={true}
    />
  );
});

/************************
 * Search
 ***********************/

export const TableSearch = (props: SearchProps) => {
  return <SearchComponent {...props} className={styles.Search} />;
};
