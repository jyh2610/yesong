import request from '@/shared/APIs';

export const getGalleryList = async () => {
  const res = await request({
    method: 'GET',
    url: '/api/posts/category/GALLERY_GALLERY'
  });
  return res.data;
};
