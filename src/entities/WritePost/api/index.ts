import { useMutation, useQueryClient } from '@tanstack/react-query';
import { formatMultiform } from '@/shared';
import request from '@/shared/APIs';
import { IPostImage, PostState } from '../type';

interface PostDashboardParams {
  params: PostState;
  content?: string;
  image: (File | null)[];
  postId?: string;
  existingImgId?: string[];
}

export const postDashBoard = async ({
  params,
  content,
  image,
  postId,
  existingImgId
}: PostDashboardParams) => {
  const formData = new FormData();
  const finalContent = content || params.content;

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

interface UsePostDashboardParams {
  params: PostState;
  content?: string;
  image: (File | null)[];
  postId?: string;
  existingImgId?: string[];
}

export const usePostDashboard = () => {
  const queryClient = useQueryClient();
  const mutationFn = (variables: UsePostDashboardParams) =>
    postDashBoard(variables);

  return useMutation<void, unknown, UsePostDashboardParams>({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['postDataById', 'mainGallery']
      });
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
