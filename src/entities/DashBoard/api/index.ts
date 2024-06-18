import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosRequestHeaders } from 'axios';
import { IGetPost } from '@/shared';
import request from '@/shared/APIs';

export const getPosts = async ({
  page,
  category
}: {
  page: number;
  category: string;
}) => {
  const res = await request<IGetPost[]>({
    method: 'GET',
    url: `/api/posts/category/${category}`,
    params: {
      page: page,
      size: 8
    }
  });

  return res.data;
};

export const useGetPosts = ({
  page,
  category
}: {
  page: number;
  category: string;
}): UseQueryResult<IGetPost[], Error> => {
  return useQuery<IGetPost[], Error>({
    queryKey: ['postList', page, category],
    queryFn: () => getPosts({ page, category })
  });
};
