import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { IGetPostData } from '@/shared';
import request from '@/shared/APIs';

export const getMainNotice = async (): Promise<IGetPostData> => {
  const res = await request<IGetPostData>({
    method: 'GET',
    url: '/api/posts/category/COMMUNITY_NOTICE?page=0&size=5'
  });
  return res.data;
};

export const useGetMainNotice = (): UseQueryResult<IGetPostData, Error> => {
  return useQuery<IGetPostData, Error>({
    queryKey: ['postList'],
    queryFn: () => getMainNotice()
  });
};
