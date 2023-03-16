import React, { forwardRef, MouseEventHandler, ReactNode } from 'react';

import { AspectRatioProps, Root as AspectRatioRoot } from '@radix-ui/react-aspect-ratio';
import { Image } from '../Image';

import classNames from 'classnames';
import styles from './GridCard.module.scss';

export interface GridCardProps {
  className?: string;
  aspectRatio: AspectRatioProps['ratio'];
  children: ReactNode;
  imageSrc?: string;
  imageAlt: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const GridCard = forwardRef<HTMLDivElement, GridCardProps>(
  ({ aspectRatio = 1, className, children, imageAlt, imageSrc, onClick }: GridCardProps, ref) => {
    return (
      <div onClick={onClick} className={classNames(styles.Container, className)} ref={ref}>
        <AspectRatioRoot ratio={aspectRatio} className={styles.Aspect}>
          <Image className={styles.Image} src={imageSrc} alt={imageAlt} />
        </AspectRatioRoot>
        <div className={styles.Content}>{children}</div>
      </div>
    );
  }
);
