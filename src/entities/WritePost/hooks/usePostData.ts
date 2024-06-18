import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from '@/app/_providers/ToastProvider';
import { postDashBoard } from '../api';
import { IPostData } from '../type';

const initialData: IPostData = {
  title: '',
  content: '',
  category: 'COMMUNITY_NOTICE',
  links: ['', '']
};

export function usePostData() {
  const [postData, setPostData] = useState<IPostData>(initialData);
  const { showToast } = useToast();
  const route = useRouter();

  const postDashBoardHandler = async () => {
    try {
      await postDashBoard(postData);
      setPostData(initialData);
      showToast({
        type: 'success',
        message: '게시판 등록에 성공했습니다.'
      });
      route.back();
    } catch {
      showToast({
        type: 'fail',
        message: '게시판 등록에 실패했습니다.'
      });
    }
  };

  return { postData, setPostData, postDashBoardHandler };
}
