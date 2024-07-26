'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/_providers/AuthProvider';
import { menuMapping } from '../constant';

type MenuMappingKeys = keyof typeof menuMapping;

function AdminButton({ title }: { title: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const { isLogin } = useAuth();
  const lastSegment = segments[segments.length - 1] as MenuMappingKeys;

  if (!isLogin) {
    return null;
  }

  const handleButtonClick = () => {
    const targetPath = `/write/${menuMapping[lastSegment]}?title=${encodeURIComponent(title)}`;
    router.push(targetPath);
  };

  return (
    <div className="flex justify-end">
      <div className="flex gap-2 text-white">
        <button
          className="bg-gray-600 rounded-md p-2"
          onClick={handleButtonClick}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default AdminButton;
