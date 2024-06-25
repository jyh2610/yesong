import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@/shared/APIs';
import { PostState } from '../type';

export const postDashBoard = async (
  params: PostState,
  image: (File | null)[],
  postId?: string
) => {
  const formData = new FormData();

  const formatData = !postId
    ? {
        title: params.title,
        content: params.content,
        category: params.category,
        links: params.links
      }
    : {
        id: postId,
        title: params.title,
        content: params.content,
        category: params.category,
        links: params.links
      };

  formData.append(
    postId ? 'postUpdateDTO' : 'postCreateDTO',
    new Blob([JSON.stringify(formatData)], { type: 'application/json' })
  );

  image.forEach((file, index) => {
    if (file) {
      formData.append('files', file);
    }
  });

  await request({
    method: !postId ? 'POST' : 'PUT',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: '/api/posts',
    data: formData
  });
};

export const usePostDashboard = (
  params: PostState,
  image: (File | null)[],
  postId: string
) => {
  const queryClient = useQueryClient();
  const mutationFn = () => postDashBoard(params, image);

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postDataById'] });
    },
    onError: (error: unknown) => {
      console.error('Mutation failed:', error);
    }
  });
};
