import type { FC } from 'react';
import type { CropMode } from 'cloudinary-react';
import type { AspectRatioProps } from '@radix-ui/react-aspect-ratio';

import React, { useState, useRef } from 'react';

import { Image, Transformation } from 'cloudinary-react';
import { Root as AspectRatioRoot } from '@radix-ui/react-aspect-ratio';
import { LoadingIndicator } from '../../../LoadingIndicator';

import { getHashFromIPFSUrl } from '../NFTMedia.helpers';
import { generateVideoPoster, generateCloudinaryUrl } from './CloudinaryMedia.helpers';
import { useCloudinaryMediaType } from './hooks';
import { useResize } from '../../../../lib/hooks';

import { MediaType } from '../NFTMedia.constants';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_FOLDER } from './CloudinaryMedia.constants';

import styles from './CloudinaryMedia.module.scss';

type CloudinaryMediaProps = {
  ipfsUrl: string;
  alt: string;
  fit?: CropMode;
  aspectRatio?: AspectRatioProps['ratio'];
  onClick?: () => void;
};

export const CloudinaryMedia: FC<CloudinaryMediaProps> = ({ ipfsUrl, alt, fit = 'fit', aspectRatio = 1, onClick }) => {
  const [isLoadedMedia, setIsLoadedMedia] = useState<boolean>(false);
  const [isLoadingMediaError, setIsLoadingMediaError] = useState<boolean>(false);

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useResize({
    onResize: setContainerWidth,
    targetRef: containerRef
  });

  const hash = getHashFromIPFSUrl(ipfsUrl);
  const poster = generateVideoPoster(hash);

  const { isLoading: isLoadingMediaType, data: mediaType } = useCloudinaryMediaType(hash);

  const isLoading = isLoadingMediaType || (!isLoadedMedia && !isLoadingMediaError);
  const url = generateCloudinaryUrl(hash, mediaType);

  const onLoad = () => {
    setIsLoadedMedia(true);
  };

  const onError = () => {
    setIsLoadingMediaError(true);
  };

  return (
    <AspectRatioRoot ratio={aspectRatio} className={styles.Container} ref={containerRef}>
      {mediaType === MediaType.Image && (
        <Image
          alt={alt}
          className={styles.Media}
          cloudName={CLOUDINARY_CLOUD_NAME}
          onClick={onClick}
          onError={onError}
          onLoad={onLoad}
          publicId={`${CLOUDINARY_FOLDER}/${hash}`}
          secure={true}
        >
          <Transformation width={containerWidth} crop={fit === 'cover' ? 'fill' : 'fit'} quality={60} />
        </Image>
      )}

      {mediaType === MediaType.Video && (
        <video
          autoPlay
          className={styles.Media}
          controls={false}
          loop
          muted
          onClick={onClick}
          onError={onError}
          onLoadedMetadata={onLoad}
          playsInline
          poster={poster}
          preload="metadata"
        >
          <source src={url + '.webm'} type="video/webm"></source>
          <source src={url + '.mp4'} type="video/mp4"></source>
          <source src={url + '.ogv'} type="video/ogg"></source>
        </video>
      )}

      {isLoading && <LoadingIndicator />}
    </AspectRatioRoot>
  );
};
