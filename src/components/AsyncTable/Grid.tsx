import React, { memo, ReactNode } from 'react';

import { GridPlaceholders } from './Placeholder';

import styles from './AsyncTable.module.scss';

interface GridProps {
  cards: ReactNode;
  isSingleColumnGrid: boolean;
}

export const Grid = memo(({ cards, isSingleColumnGrid }: GridProps) => {
  return (
    <div className={styles.Grid}>
      {cards}
      {!isSingleColumnGrid && <GridPlaceholders amount={3} />}
    </div>
  );
});
