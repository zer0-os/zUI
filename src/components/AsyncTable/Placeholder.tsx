import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { TableData } from './Column';

export interface RowPlaceholdersProps {
  amount: number;
  height: number;
  numColumns: number;
}

export const RowPlaceholders = ({ amount, height, numColumns }: RowPlaceholdersProps) => {
  const columns = Array(numColumns)
    .fill(null)
    .map((_, index) => (
      <TableData key={index} alignment={'center'}>
        <Skeleton width={'100%'} height={height} />
      </TableData>
    ));

  const rows = Array(amount)
    .fill(null)
    .map((_, index) => <tr key={index}>{columns}</tr>);

  return <>{rows}</>;
};

export interface GridPlaceholdersProps {
  amount: number;
}

export const GridPlaceholders = ({ amount }: GridPlaceholdersProps) => {
  const placeholders = Array(amount)
    .fill(null)
    .map((i, index) => <div key={index}>{i}</div>);

  return <>{placeholders}</>;
};
