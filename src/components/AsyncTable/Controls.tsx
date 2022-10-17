import React, { useMemo } from 'react';

import { ToggleGroup } from '../ToggleGroup';
import { IconRows3, IconGrid1 } from '../Icons';
import { Search } from '../Search/Search';

import styles from './Controls.module.scss';

interface ControlsProps {
  canSwitchViews?: boolean;
  isGridView?: boolean;
  onSwitchViews?: (isGridView: boolean) => void;
  onChangeSearchQuery: (value: string) => void;
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
      {/* Rendering empty div to persist positioning when searchbar isn't rendered */}
      {isSearchable ? (
        <Search className={styles.Search} queryString={searchQuery} onQueryStringChange={onChangeSearchQuery} />
      ) : (
        <div></div>
      )}
      <ViewToggle />
    </div>
  );
};
