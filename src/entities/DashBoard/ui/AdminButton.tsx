'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/_providers/AuthProvider';
import { menuMapping } from '../constant';

type MenuMappingKeys = keyof typeof menuMapping;
function AdminButton() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const { isLogin } = useAuth();
  const lastSegment = segments[segments.length - 1] as MenuMappingKeys;

  if (!isLogin) {
    return null;
  }

  return (
    <div className="flex justify-end">
      <div className="flex gap-2 text-white">
        <button
          className="bg-gray-600 rounded-md p-2"
          onClick={() => router.push(`/write/${menuMapping[lastSegment]}`)}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default AdminButton;
