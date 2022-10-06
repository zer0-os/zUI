import React, { useEffect, useRef } from 'react';

import { Column } from './Column';
import { LoadingIndicator } from '../LoadingIndicator';
import { useInfiniteScroll } from './useInfiniteScroll';
import { Grid } from './Grid';
import { Table } from './Table';

import styles from './AsyncTable.module.scss';
import { AsyncTableComponent } from './types';

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
export interface SearchKey<T> {
  key: keyof T;
  name: string;
}

export interface AsyncTableProps<T> {
  className?: string;
  columns: Column[];
  data?: T[];
  gridComponent: AsyncTableComponent<T>;
  isGridView?: boolean;
  isLoading?: boolean;
  isSingleColumnGrid?: boolean;
  itemKey: keyof T;
  loadingText?: string;
  rowComponent: AsyncTableComponent<T>;
  searchKey: SearchKey<T>;
}

const CONFIG = {
  chunkSizeGrid: 3,
  chunkSizeList: 10
};

export const AsyncTable = <T extends unknown>({
  className,
  columns,
  data,
  gridComponent,
  isGridView,
  isLoading,
  isSingleColumnGrid = false,
  rowComponent
}: AsyncTableProps<T>) => {
  const lastView = useRef<'grid' | 'list'>();

  const { InfiniteScrollWrapper, chunkedComponents, resetChunk } = useInfiniteScroll({
    items: data ?? [],
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
    return <LoadingIndicator className={styles.Loading} text={'Loading'} />;
  }

  return (
    <InfiniteScrollWrapper className={className}>
      {isGridView ? (
        <Grid cards={chunkedComponents} isSingleColumnGrid={isSingleColumnGrid} />
      ) : (
        <Table rows={chunkedComponents} columns={columns} isLoading={isLoading} />
      )}
    </InfiniteScrollWrapper>
  );
};
