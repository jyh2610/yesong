import request from '@/shared/APIs';
import { IGetPost } from '../type';

export const getGalleryList = async () => {
  const res = await request<IGetPost[]>({
    method: 'GET',
    url: '/api/posts/category/GALLERY_GALLERY'
  });
  return res.data;
};
