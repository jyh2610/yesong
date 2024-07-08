import { useMutation, useQueryClient } from '@tanstack/react-query';
import { formatMultiform } from '@/shared';
import request from '@/shared/APIs';
import { IPostImage, PostState } from '../type';

export const postDashBoard = async (
  params: PostState,
  content: string | undefined,
  image: (File | null)[],
  postId?: string,
  existingImgId?: string[]
) => {
  const formData = new FormData();
  const finalContent = content || params.content;

  console.log(finalContent, params);

  const formatData = !postId
    ? {
        title: params.title,
        content: finalContent,
        category: params.category,
        links: params.links
      }
    : {
        id: postId,
        title: params.title,
        content: finalContent,
        category: params.category,
        links: params.links
      };

  formData.append(
    postId ? 'postUpdateDTO' : 'postCreateDTO',
    new Blob([JSON.stringify(formatData)], { type: 'application/json' })
  );

  image.forEach(file => {
    if (file) {
      formData.append('files', file);
    }
  });

  if (existingImgId && existingImgId.length > 0) {
    formData.append('existingFileIds', JSON.stringify(existingImgId));
  }

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
  content: string | undefined,
  image: (File | null)[],
  postId?: string,
  existingImgId?: string[]
) => {
  const queryClient = useQueryClient();
  const mutationFn = () =>
    postDashBoard(params, content, image, postId, existingImgId);

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

export const uploadEditorImage = async (images: File[]) => {
  const res = await request<IPostImage>({
    method: 'POST',
    url: '/api/posts/s3/upload/photo',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: formatMultiform(images)
  });
  return res.data;
};
