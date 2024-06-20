'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { tokenController } from '@/shared';

function AdminButton() {
  const router = useRouter();
  const [hasAccessToken, setHasAccessToken] = useState(false);

  useEffect(() => {
    if (tokenController.getAccessToken() !== undefined) {
      setHasAccessToken(true);
    }
  }, []);

  if (!hasAccessToken) {
    return null;
  }

  return (
    <div className="flex justify-end">
      <div className="flex gap-2 text-white">
        <button
          className="bg-gray-600 rounded-md p-2"
          onClick={() => router.push('/write')}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default AdminButton;
