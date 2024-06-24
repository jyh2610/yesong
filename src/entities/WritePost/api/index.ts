import request from '@/shared/APIs';
import { PostState } from '../type';

export const postDashBoard = async (
  params: PostState,
  image: (File | null)[]
) => {
  const formData = new FormData();

  // Append the JSON part as a Blob
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

  // Append files to form data
  image.forEach((file, index) => {
    if (file) {
      formData.append('files', file);
    }
  });

  await request({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: '/api/posts',
    data: formData
  });
};
