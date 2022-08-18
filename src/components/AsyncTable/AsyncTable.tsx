import React, { ReactNode } from 'react';

import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';

import styles from './AsyncTable.module.scss';

const cx = classNames.bind(styles);

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
 *
 * @TODO: make sure row components enforce column alignments
 * @TODO: improve typings
 * @TODO: implement grid view
 */

export interface Column {
  id: string; // ID is required because header is optional
  header?: string;
  alignment: 'left' | 'right' | 'center';
  className?: string;
}

interface SearchKey<T> {
  key: keyof T;
  name: string;
}

interface AsyncTableProps<T> {
  // Data
  data?: T[];
  itemKey: keyof T;
  columns: Column[];

  // Display
  isGridView?: boolean;
  isLoading?: boolean;
  numLoadingRows?: number;
  rowHeight?: number;
  loadingText?: string;
  // @TODO: pick a better name for "options"
  rowComponent: (data: T, options?: unknown) => ReactNode;
  gridComponent: (data: T, options?: unknown) => ReactNode;

  // Search
  searchKey: SearchKey<T>;
}

const AsyncTable = <T extends unknown>({
  data,
  // itemKey,
  columns,
  gridComponent,
  isGridView,
  isLoading,
  numLoadingRows = 3,
  rowHeight = 40,
  rowComponent
}: // searchKey,
AsyncTableProps<T>) => {
  // @TODO: handle loading

  if (isGridView) {
    return <div className={styles.Grid}>{data?.map(d => gridComponent(d))}</div>;
  }

  return (
    <table className={styles.Container}>
      <thead>
        <tr>
          {columns.map((c: Column) => (
            <th
              className={cx(c.className, {
                Left: c.alignment === 'left',
                Center: c.alignment === 'center',
                Right: c.alignment === 'right'
              })}
              key={`async-table-th-${c.id}`}
            >
              {isLoading ? <Skeleton /> : c.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading
          ? Array(numLoadingRows)
              .fill(0)
              .map(num => (
                <tr key={`async-table-tr-${num}`}>
                  {columns.map((c: Column) => (
                    <td key={`async-table-tr-${num}-td-${c.id}`}>
                      <Skeleton width={'100%'} height={rowHeight} />
                    </td>
                  ))}
                </tr>
              ))
          : data?.map(d => rowComponent(d))}
      </tbody>
    </table>
  );
};

export default AsyncTable;
