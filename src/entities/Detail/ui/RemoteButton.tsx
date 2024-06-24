'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/app/_providers/ToastProvider';
import { deletePost } from '../api';

export function RemoteButton({
  id,
  category
}: {
  id: string;
  category: string;
}) {
  const { showToast } = useToast();
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/write/${category}?postId=${id}`);
  };

  const deleteButtonHandler = async () => {
    try {
      await deletePost(id);
      showToast({
        type: 'success',
        message: '삭제에 성공했습니다.'
      });
      router.back();
    } catch {
      showToast({
        type: 'fail',
        message: '삭제에 실패했습니다.'
      });
    }
  };

  return (
    <div className="w-full flex justify-end gap-2">
      <Button onClick={handleNavigation} color="primary" size="sm">
        수정
      </Button>
      <Button onClick={deleteButtonHandler} color="danger" size="sm">
        삭제
      </Button>
    </div>
  );
}
