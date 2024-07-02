import { useQuery } from '@tanstack/react-query';
import { IGetPostData } from '@/shared';
import request from '@/shared/APIs';

export const getMainGallery = async (): Promise<IGetPostData> => {
  const res = await request<IGetPostData>({
    method: 'GET',
    url: `/api/posts/category/GALLERY_GALLERY?page=0&size=8`
  });

  return res.data;
};

export const useGetMainGallery = () => {
  return useQuery<IGetPostData>({
    queryKey: ['postDataById'],
    queryFn: () => getMainGallery()
  });
};
