import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_FOLDER } from './CloudinaryMedia.constants';
import { MediaType } from '../NFTMedia.constants';

// Cloudinary React SDK isn't applying crop options
// to video posters automatially, so we have to generate
// them manually
export const generateVideoPoster = (hash: string, options?: string) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/so_0/${
    options?.length ? options + '/' : ''
  }v1/${CLOUDINARY_FOLDER}/${hash}.jpg`;

export const generateCloudinaryUrl = (hash: string, type: MediaType, options?: string) => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/${type}/upload/${
    options ? options + '/' : ''
  }${CLOUDINARY_FOLDER}/${hash}`;
};

// Gets MIME type of media at URL
// Useful because our IPFS links don't have
// a file extension
export const checkMediaType = async (hash: string) => {
  const response = await fetch(generateCloudinaryUrl(hash, MediaType.Video), { method: 'HEAD' });
  return response.status === 200 ? MediaType.Video : MediaType.Image;
};
