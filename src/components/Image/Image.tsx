import React, { useState, useEffect } from 'react';

import { Skeleton } from '../Skeleton';

import styles from './Image.module.scss';
import classNames from 'classnames';

export interface ImageProps {
  alt: string;
  src?: string;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  onError?: () => void;
}

interface ImageState {
  isCached: boolean;
  src: string;
}

// named Img here to avoid conflict with the HTMLImageElement in useEffect
const Img = ({ className, objectFit = 'cover', alt, src, onLoad, onError }: ImageProps) => {
  const [loadedImage, setLoadedImage] = useState<ImageState>();

  useEffect(() => {
    setLoadedImage(undefined);
    if (src && Boolean(new URL(src))) {
      const image = new Image();
      image.src = src;
      // if image is cached, set isCached so we can skip animations
      if (image.complete) {
        setLoadedImage({ isCached: true, src });
      } else {
        // else wait until load is complete to set state
        image.onload = () => {
          setLoadedImage({ isCached: false, src });
        };

        image.onerror = () => {
          onError?.();
        };
      }
    }
  }, [src]);

  return (
    <div
      className={classNames(styles.Container, className)}
      data-status={loadedImage?.src ? 'loaded' : 'loading'}
      data-is-cached={loadedImage?.isCached ? '' : undefined}
    >
      <img
        data-testid={'zui-image-img'}
        className={styles.Image}
        style={{ objectFit }}
        src={loadedImage?.src}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
      />
      <Skeleton className={styles.Skeleton} width={'100%'} height={'100%'} />
    </div>
  );
};

export { Img as Image };
