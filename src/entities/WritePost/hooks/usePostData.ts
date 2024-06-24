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
  files: [null, null]
};

type MenuMappingKeys = keyof typeof menuMapping;

export function usePostData() {
  const [postData, setPostData] = useState<PostState>(initialData);
  const [uploadImage, setUploadImage] = useState<(File | null)[]>([null, null]);
  const { showToast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const searchParams = useSearchParams();
  const postId = searchParams.get('postId');

  const lastSegment = segments[segments.length - 1] as MenuMappingKeys;

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

  const postDashBoardHandler = async () => {
    try {
      await postDashBoard(postData, uploadImage);
      setPostData(initialData);
      setUploadImage([null, null]);
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

  return {
    postData,
    setPostData,
    postDashBoardHandler,
    uploadImage,
    setUploadImage
  };
}
