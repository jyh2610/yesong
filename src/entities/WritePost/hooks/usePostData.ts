import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from '@/app/_providers/ToastProvider';
import { menuMapping } from '@/entities/DashBoard/constant';
import { getPostById } from '@/entities/Detail/api';
import { postDashBoard } from '../api';
import { PostState } from '../type';

export const initialData: PostState = {
  title: '',
  content: '',
  category: '',
  links: [],
  files: []
};

type MenuMappingKeys = keyof typeof menuMapping;

export function usePostData() {
  const [postData, setPostData] = useState<PostState>(initialData);
  const [uploadImage, setUploadImage] = useState<File[]>([]);
  const existingImgId = postData.files.map(file => file?.id);

  const { showToast } = useToast();

  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const searchParams = useSearchParams();
  const lastSegment = segments[segments.length - 1] as MenuMappingKeys;

  const postId = searchParams.get('postId');

  useEffect(() => {
    const getFixData = async (id: string) => {
      try {
        const res = await getPostById(id);
        setPostData({
          title: res.title,
          content: res.content,
          category: res.category,
          links: res.links,
          files: res.files
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (postId) {
      getFixData(postId);
    }
  }, [postId]);

  useEffect(() => {
    setPostData(prev => ({
      ...prev,
      category: lastSegment
    }));
  }, [lastSegment]);

  const postDashBoardHandler = async (content: string) => {
    try {
      postId
        ? await postDashBoard(postData, content, uploadImage, postId)
        : await postDashBoard(postData, content, uploadImage);
      setPostData(initialData);
      setUploadImage([]);
      showToast({
        type: 'success',
        message: '게시판 등록에 성공했습니다.'
      });
      router.back();
    } catch (error) {
      showToast({
        type: 'fail',
        message: '게시판 등록에 실패했습니다.'
      });
    }
  };
  const removeExistingImg = (id: string) => {
    setPostData(prev => ({
      ...prev,
      files: prev.files.filter(file => file?.id !== id)
    }));
  };

  const removeUploadImage = (index: number) => {
    setUploadImage(prev => prev.filter((_, i) => i !== index));
  };

  return {
    postData,
    setPostData,
    postDashBoardHandler,
    uploadImage,
    setUploadImage,
    existingImgId,
    removeExistingImg,
    removeUploadImage
  };
}
