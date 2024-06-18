import request from '@/shared/APIs';
import { IPostData } from '../type';

export const postDashBoard = async (params: IPostData) => {
  const formData = new FormData();

  // Append the JSON string as a Blob object with type application/json
  formData.append(
    'postCreateDTO',
    new Blob(
      [
        JSON.stringify({
          title: params.title,
          content: params.content,
          category: params.category,
          links: params.links
        })
      ],
      { type: 'application/json' }
    )
  );

  await request({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: '/api/posts',
    data: formData
  });
};
