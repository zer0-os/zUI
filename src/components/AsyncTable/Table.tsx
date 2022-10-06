import React, { memo, ReactNode } from 'react';

import { Column, TableHeader } from './Column';
import { HeaderPlaceholders, RowPlaceholders } from './Placeholder';

import styles from './AsyncTable.module.scss';

interface TableProps {
  columns: Column[];
  rows: ReactNode;
  isLoading: boolean;
}

export const Table = memo(({ columns, rows, isLoading }: TableProps) => (
  <table className={styles.Table}>
    <thead>
      <tr>
        {isLoading ? (
          <HeaderPlaceholders amount={columns.length} />
        ) : (
          columns.map((c: Column) => (
            <TableHeader alignment={c.alignment} key={c.id}>
              {c.header}
            </TableHeader>
          ))
        )}
      </tr>
    </thead>
    <tbody>{isLoading ? <RowPlaceholders amount={5} height={40} numColumns={columns.length} /> : rows}</tbody>
  </table>
));
