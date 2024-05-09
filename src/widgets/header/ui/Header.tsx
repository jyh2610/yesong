import Link from 'next/link';
import { LoginHeader, MenuBar } from '@/features/index';
import { FullImage, PATH } from '@/shared';

export function Header() {
  return (
    <div className="w-2/3 mx-auto">
      <LoginHeader />
      <div className="flex justify-center items-center p-2">
        <div className="w-80 h-14 relative cursor-pointer m-2">
          <Link href={PATH.HOME}>
            <FullImage
              quality={100}
              src="/assets/Logo.png"
              altContent={'메인로고'}
            />
          </Link>
        </div>
        <MenuBar />
      </div>
    </div>
  );
}
