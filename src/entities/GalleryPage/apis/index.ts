import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { IGetPost } from '@/shared';
import request from '@/shared/APIs';

export const getGalleryList = async (page: number) => {
  const res = await request<IGetPost[]>({
    method: 'GET',
    url: '/api/posts/category/GALLERY_GALLERY',
    params: {
      page: page,
      size: 8
    }
  });

  return res.data;
};

export const useGetGalleryList = (
  page: number
): UseQueryResult<IGetPost[], Error> => {
  return useQuery<IGetPost[], Error>({
    queryKey: ['galleryList', page],
    queryFn: () => getGalleryList(page)
  });
};
