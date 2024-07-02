import { IGetPostData } from '@/shared';
import request from '@/shared/APIs';

export const getMainNotice = async (): Promise<IGetPostData> => {
  const res = await request<IGetPostData>({
    method: 'GET',
    url: '/api/posts/category/COMMUNITY_NOTICE?page=0&size=5'
  });
  return res.data;
};
