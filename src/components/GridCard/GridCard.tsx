import React, { ReactNode } from 'react';

import { Root as AspectRatioRoot, AspectRatioProps } from '@radix-ui/react-aspect-ratio';

import styles from './GridCard.module.scss';
import classNames from 'classnames';

export interface GridCardProps {
  className?: string;
  aspectRatio: AspectRatioProps['ratio'];
  children: ReactNode;
  imageSrc: string;
  imageAlt?: string;
}

export const GridCard = ({ aspectRatio, className, children, imageAlt, imageSrc }: GridCardProps) => {
  return (
    <div className={classNames(styles.Container, className)}>
      <AspectRatioRoot ratio={aspectRatio} className={styles.ImageContainer}>
        <img src={imageSrc} alt={imageAlt} />
      </AspectRatioRoot>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};
