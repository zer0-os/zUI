import { TableData, TableHeader } from './Column';
import Skeleton from 'react-loading-skeleton';
import React from 'react';

interface HeaderPlaceholdersProps {
  amount: number;
}

export const HeaderPlaceholders = ({ amount }: HeaderPlaceholdersProps) => {
  const columnPlaceholder = (
    <TableHeader alignment={'center'}>
      <Skeleton width={'100%'} />
    </TableHeader>
  );

  return <>{Array(amount).fill(columnPlaceholder)}</>;
};

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
  return <>{rows}</>;
};

interface GridPlaceholdersProps {
  amount: number;
}

export const GridPlaceholders = ({ amount }: GridPlaceholdersProps) => {
  const placeholders = Array(amount).fill(<div />);

  return <>{placeholders}</>;
};
