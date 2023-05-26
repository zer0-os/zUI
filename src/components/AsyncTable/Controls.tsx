import React, { useMemo } from 'react';

import { ToggleGroup } from '../ToggleGroup';
import { IconRows3, IconGrid1 } from '../Icons';
import { Search } from '../Search';

import styles from './Controls.module.scss';

interface ControlsProps {
  canSwitchViews?: boolean;
  isGridView?: boolean;
  onSwitchViews?: (isGridView: boolean) => void;
  onChangeSearchQuery: (value: string) => void;
  searchPlaceholder?: string;
  searchQuery?: string;
  isSearchable?: boolean;
}

const VIEW_OPTIONS = [
  {
    key: 'list',
    icon: <IconRows3 isFilled={true} />
  },
  {
    key: 'grid',
    icon: <IconGrid1 isFilled={true} />
  }
];

export const Controls = ({
  canSwitchViews,
  onSwitchViews,
  isGridView,
  onChangeSearchQuery,
  searchPlaceholder,
  searchQuery,
  isSearchable
}: ControlsProps) => {
  const ViewToggle = useMemo(
    () => () => {
      if (!canSwitchViews) return null;

      return (
        <ToggleGroup
          className={styles.Toggle}
          selection={isGridView ? 'grid' : 'list'}
          selectionType={'single'}
          onSelectionChange={(key: string) => {
            onSwitchViews?.(key === 'grid');
          }}
          options={VIEW_OPTIONS}
          variant={'minimal'}
          isRequired={true}
        />
      );
    },
    [canSwitchViews, onSwitchViews, isGridView]
  );

  return (
    <div className={styles.Container}>
      {isSearchable && (
        <Search
          className={styles.Search}
          placeholder={searchPlaceholder}
          queryString={searchQuery}
          onQueryStringChange={onChangeSearchQuery}
        />
      )}
      <ViewToggle />
    </div>
  );
};
