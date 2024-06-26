import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { IGetPostData } from '@/shared';
import request from '@/shared/APIs';

export const getGalleryList = async (page: number) => {
  const res = await request<IGetPostData>({
    method: 'GET',
    url: '/api/posts/category/GALLERY_GALLERY',
    params: {
      page: page - 1,
      size: 8
    }
  });

  return res.data;
};

export const useGetGalleryList = (
  page: number
): UseQueryResult<IGetPostData, Error> => {
  return useQuery<IGetPostData, Error>({
    queryKey: ['galleryList', page],
    queryFn: () => getGalleryList(page)
  });
};
