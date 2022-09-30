import React, { ReactNode } from 'react';

import { Root as AspectRatioRoot, AspectRatioProps } from '@radix-ui/react-aspect-ratio';

import styles from './GridCard.module.scss';

export interface GridCardProps {
  aspectRatio: AspectRatioProps['ratio'];
  children: ReactNode;
  imageSrc: string;
  imageAlt?: string;
}

export const GridCard = ({ aspectRatio, children, imageAlt, imageSrc }: GridCardProps) => {
  return (
    <div className={styles.Container}>
      <AspectRatioRoot ratio={aspectRatio} className={styles.ImageContainer}>
        <img src={imageSrc} alt={imageAlt} />
      </AspectRatioRoot>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};
