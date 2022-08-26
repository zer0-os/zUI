import React, { FC, ReactNode } from 'react';

import * as AspectRatio from '@radix-ui/react-aspect-ratio';

import styles from './GridCard.module.scss';

export interface GridCardProps {
  aspectRatio: AspectRatio.AspectRatioProps['ratio'];
  children: ReactNode;
}

const GridCard: FC<GridCardProps> = ({ aspectRatio, children }) => {
  return (
    <div className={styles.Container}>
      <AspectRatio.Root ratio={aspectRatio} className={styles.ImageContainer}>
        <img src={'https://picsum.photos/200/500'} />
      </AspectRatio.Root>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};

export default GridCard;
