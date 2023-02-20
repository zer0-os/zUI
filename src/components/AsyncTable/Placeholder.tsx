import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { TableData } from './Column';

interface RowPlaceholdersProps {
  amount: number;
  height: number;
  numColumns: number;
}

export const RowPlaceholders = ({ amount, height, numColumns }: RowPlaceholdersProps) => {
  const columnPlaceholder = (
    <TableData alignment={'center'}>
      <Skeleton width={'100%'} height={height} />
    </TableData>
  );

  const columns = Array(numColumns).fill(columnPlaceholder);
  const rows = Array(amount).fill(<tr>{columns}</tr>);

  return <div>{rows}</div>;
};

interface GridPlaceholdersProps {
  amount: number;
}

export const GridPlaceholders = ({ amount }: GridPlaceholdersProps) => {
  const placeholders = Array(amount).fill(<div />);

  return <div>{placeholders}</div>;
};
