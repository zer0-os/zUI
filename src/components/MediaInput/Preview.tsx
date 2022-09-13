//- React Imports
import React, { FC } from 'react';

//- Style Imports
import './MediaInput.scss';

//- Type Imports
import { MediaType } from './MediaInput.types';

type PreviewProps = {
  mediaType: MediaType;
  previewUrl: string;
};

export const Preview: FC<PreviewProps> = ({ mediaType, previewUrl }) => {
  if (mediaType === 'video') {
    return <video autoPlay controls loop src={previewUrl} />;
  }

  return <img alt="NFT Preview" src={previewUrl} />;
};
