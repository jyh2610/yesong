import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosRequestHeaders } from 'axios';
import { IGetPost, IGetPostData } from '@/shared';
import request from '@/shared/APIs';

export const getPosts = async ({
  page,
  category
}: {
  page: number;
  category: string;
}): Promise<IGetPostData> => {
  const res = await request<IGetPostData>({
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
}): UseQueryResult<IGetPostData, Error> => {
  return useQuery<IGetPostData, Error>({
    queryKey: ['postList', page, category],
    queryFn: () => getPosts({ page: page - 1, category })
  });
};

export const searchPost = async ({
  category,
  search
}: {
  category: string;
  search: string;
}): Promise<IGetPostData> => {
  const res = await request<IGetPostData>({
    method: 'GET',
    url: `/api/posts/search?category=${category}&search=${search}&searchType=TITLE&page=00&size=1`
  });
  return res.data;
};
export const useGetSearchPost = ({
  category,
  search
}: {
  category: string;
  search: string;
}): UseQueryResult<IGetPostData, Error> => {
  return useQuery<IGetPostData, Error>({
    queryKey: ['searchPost', search, category],
    queryFn: () => searchPost({ search, category })
  });
};
