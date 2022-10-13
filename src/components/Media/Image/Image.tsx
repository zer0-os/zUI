import type { FC } from 'react';
import type { AspectRatioProps } from '@radix-ui/react-aspect-ratio';

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Root as AspectRatioRoot } from '@radix-ui/react-aspect-ratio';
import { LoadingIndicator } from '../../LoadingIndicator';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

type ImageProps = {
  url: string;
  alt: string;
  aspectRatio?: AspectRatioProps['ratio'];
  classNames?: {
    container?: string;
    image?: string;
  };
};

export const Image: FC<ImageProps> = ({ url, alt, aspectRatio = 1, classNames }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const onLoad = () => {
    setIsLoaded(true);
  };

  return (
    <AspectRatioRoot ratio={aspectRatio} className={cx(styles.Container, classNames?.container)}>
      {!isLoaded && <LoadingIndicator />}

      <img
        src={url}
        onLoad={onLoad}
        alt={alt}
        className={cx(styles.Image, classNames?.image, {
          Loaded: isLoaded
        })}
      />
    </AspectRatioRoot>
  );
};
