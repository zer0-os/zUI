import React, { useEffect, useMemo, useRef, useState } from 'react';

import { AsyncTableComponent } from './types';
import { useInfiniteScroll } from './useInfiniteScroll';
import { useDebounce } from '../../lib/hooks/useDebounce';

import { Grid } from './Grid';
import { Table } from './Table';
import { Column } from './Column';
import { Controls } from './Controls';
import { LoadingIndicator } from '../LoadingIndicator';

import styles from './AsyncTable.module.scss';

export interface SearchKey<T> {
  key: keyof T;
  name: string;
}

export interface AsyncTableProps<T> {
  className?: string;
  columns: Column[];
  data?: T[];
  gridComponent?: AsyncTableComponent<T>;
  isLoading?: boolean;
  isSingleColumnGrid?: boolean;
  itemKey: keyof T;
  loadingText?: string;
  emptyText?: string;
  rowComponent?: AsyncTableComponent<T>;
  // @TODO: typings to prevent passing searchQuery if searchKey is undefined
  searchKey?: SearchKey<T>;
  showControls?: boolean;
  isGridViewByDefault?: boolean;
}

const CONFIG = {
  chunkSizeGrid: 6,
  chunkSizeList: 10,
  searchDebounceMilliseconds: 100
};

/**
 * NOTE:
 * This table should only be used when data is coming
 * from multiple sources, but we need to defer loading
 * after the first source.
 *
 * For example, when loading a zNS NFT, the initial query
 * grabs a list of domain IDs and metadata URLs. We might
 * want to also show the name of the NFT and how many bids
 * have been placed on it. Both of these data points come
 * from different sources. Loading of these resources
 * should be deferred to a row component, and the minimal
 * data for the row (i.e. data from the first query) should
 * be rendered first.
 */
export const AsyncTable = <T extends unknown>({
  className,
  columns,
  data,
  gridComponent,
  isLoading,
  isSingleColumnGrid = false,
  loadingText,
  emptyText,
  rowComponent,
  searchKey,
  showControls = true,
  isGridViewByDefault = true
}: AsyncTableProps<T>) => {
  const lastView = useRef<'grid' | 'list'>();
  const [isGridView, setIsGridView] = useState<boolean>(isGridViewByDefault);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const query = useDebounce(searchQuery, CONFIG.searchDebounceMilliseconds);

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!query || !searchKey) {
      return data;
    }
    return data?.filter(item => {
      const searchValue = item[searchKey.key]?.toString().toLowerCase();
      return searchValue.includes(query.toLowerCase());
    });
  }, [data, query, searchKey]);

  // Set up infinite scroll chunks
  const { InfiniteScrollWrapper, chunkedComponents, resetChunk } = useInfiniteScroll({
    items: filteredData ?? [],
    chunkSize: isGridView ? CONFIG.chunkSizeGrid : CONFIG.chunkSizeList,
    component: isGridView ? gridComponent : rowComponent
  });

  // Warn if dev didn't memoize rowComponent
  useEffect(() => {
    if (lastView.current === 'list' && !isGridView) {
      console.warn('Detected unmemoized rowComponent!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowComponent]);

  // Warn if dev didn't memoize gridComponent
  useEffect(() => {
    if (lastView.current === 'grid' && isGridView) {
      console.warn('Detected unmemoized gridComponent!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridComponent]);

  // Reset infinite scroll whenever user changes view
  useEffect(() => {
    lastView.current = 'grid';
    resetChunk();
  }, [isGridView, resetChunk]);

  // Grid view doesn't render Skeletons when loading (yet)
  if (isGridView && isLoading) {
    return <LoadingIndicator className={styles.Loading} text={loadingText ?? 'Loading'} />;
  }

  const isEmpty = !query && !isLoading && !data?.length;
  const isSearchEmpty = query && !isLoading && !filteredData.length;

  // Show emptyText when there is no data
  if (isEmpty) {
    return <p className={styles.Empty}>{emptyText ?? 'No items to display.'}</p>;
  }

  return (
    <>
      {showControls && (
        <Controls
          canSwitchViews={Boolean(gridComponent) && Boolean(rowComponent)}
          onSwitchViews={(isGridView: boolean) => setIsGridView(isGridView)}
          isGridView={isGridView}
          searchPlaceholder={searchKey?.name && `Search by ${searchKey?.name}`}
          searchQuery={searchQuery}
          onChangeSearchQuery={setSearchQuery}
          isSearchable={Boolean(searchKey)}
        />
      )}

      <InfiniteScrollWrapper className={className}>
        {isGridView ? (
          <Grid cards={chunkedComponents} isSingleColumnGrid={isSingleColumnGrid} />
        ) : (
          <Table rows={chunkedComponents} columns={columns} isLoading={isLoading} />
        )}
      </InfiniteScrollWrapper>

      {isSearchEmpty && (
        <p className={styles.Empty}>
          No items match your search <strong>{query}</strong>.
        </p>
      )}
    </>
  );
};
