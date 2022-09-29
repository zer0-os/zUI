import React, { FC, ReactNode } from 'react';

import * as AspectRatio from '@radix-ui/react-aspect-ratio';

import styles from './GridCard.module.scss';

export interface GridCardProps {
  aspectRatio: AspectRatio.AspectRatioProps['ratio'];
  children: ReactNode;
  imageAlt?: string;
}

export const GridCard: FC<GridCardProps> = ({ aspectRatio, children, imageAlt }) => {
  return (
    <div className={styles.Container}>
      <AspectRatio.Root ratio={aspectRatio} className={styles.ImageContainer}>
        <img src={'https://picsum.photos/200/500'} alt={imageAlt} />
      </AspectRatio.Root>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};
