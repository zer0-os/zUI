import { MediaType } from '../NFTMedia.constants';

export const CLOUDINARY_CLOUD_NAME = 'fact0ry';
export const CLOUDINARY_FOLDER = 'zns';

export const CLOUDINARY_BASE_URL: Record<MediaType, string> = {
  [MediaType.Image]: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${CLOUDINARY_FOLDER}/`,
  [MediaType.Video]: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${CLOUDINARY_FOLDER}/`
};
