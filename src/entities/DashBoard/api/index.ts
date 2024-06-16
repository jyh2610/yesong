import request from '@/shared/APIs';

export const getPosts = async ({
  page,
  category
}: {
  page: number;
  category: string;
}) => {
  const res = await request({
    method: 'GET',
    url: `/api/posts/category/${category}`,
    params: {
      page: page,
      size: 8
    }
  });

  return res.data;
};
