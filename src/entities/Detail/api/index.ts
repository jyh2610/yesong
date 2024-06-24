import { IGetPost } from '@/shared';
import request from '@/shared/APIs';

export const getPostById = async (id: string): Promise<IGetPost> => {
  const res = await request<IGetPost>({
    method: 'GET',
    url: `/api/posts/${id}`
  });

  return res.data;
};

export const deletePost = async (id: string) => {
  await request({
    method: 'DELETE',
    url: `/api/posts/${id}`
  });
};
