import { useQuery } from 'react-query';
import { checkMediaType } from '../CloudinaryMedia.helpers';

export const useCloudinaryMediaType = (hash: string) => {
  return useQuery(
    ['cloudinary-media-type', hash],
    async () => {
      return await checkMediaType(hash);
    },
    {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: hash.trim().length > 0
    }
  );
};
