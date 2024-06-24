import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from '@/app/_providers/ToastProvider';
import { menuMapping } from '@/entities/DashBoard/constant';
import { getPostById } from '@/entities/Detail/api';
import { postDashBoard } from '../api';
import { IPostData } from '../type';

export const initialData: IPostData = {
  title: '',
  content: '',
  category: '',
  links: ['', ''],
  files: [null, null] // Initialize files as a tuple with two null values
};

type MenuMappingKeys = keyof typeof menuMapping;

export function usePostData() {
  const [postData, setPostData] = useState<IPostData>(initialData);
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
        setPostData(res); // API 호출 결과를 상태에 업데이트
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (postId) {
      getFixData(postId);
    }
  }, []);

  useEffect(() => {
    setPostData(prev => ({
      ...prev,
      category: lastSegment
    }));
  }, [lastSegment]);

  const postDashBoardHandler = async () => {
    try {
      await postDashBoard(postData);
      setPostData(initialData);
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

  return { postData, setPostData, postDashBoardHandler };
}
