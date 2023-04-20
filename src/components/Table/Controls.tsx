import React, { forwardRef, ReactNode } from 'react';

import { ToggleGroup } from '../ToggleGroup';
import { IconGrid1, IconRows3 } from '../Icons';
import { Search as SearchComponent, SearchProps } from '../Search';

import classNames from 'classnames';
import styles from './Controls.module.scss';

/************************
 * Controls
 *
 * Wraps all controls for the table - search, view toggle, etc.
 * Effectively just wraps them in a flexbox and aligns them.
 ***********************/

export interface ControlsProps {
  className?: string;
  children: ReactNode;
}

export const Controls = forwardRef<HTMLDivElement, ControlsProps>(({ className, children }: ControlsProps, ref) => {
  return (
    <div className={classNames(styles.Container, className)} ref={ref}>
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
  className?: string;
  onChange: (view: View) => void;
  view: View;
}

export const ViewToggle = forwardRef<HTMLDivElement, ViewToggleProps>(
  ({ className, onChange, view }: ViewToggleProps, ref) => {
    return (
      <ToggleGroup
        ref={ref}
        className={classNames(styles.Toggle, className)}
        selection={view}
        selectionType={'single'}
        onSelectionChange={onChange}
        options={VIEW_OPTIONS}
        variant={'minimal'}
        isRequired={true}
      />
    );
  }
);

/************************
 * Search
 ***********************/

export const TableSearch = (props: SearchProps) => {
  return <SearchComponent {...props} className={classNames(styles.Search, props.className)} />;
};
