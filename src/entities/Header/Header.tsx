import Link from 'next/link';
import { FullImage, PATH } from '@/shared';
import { LoginHeader, MenuBar } from './ui';

export function Header() {
  return (
    <div className="w-2/3 mx-auto">
      <LoginHeader />
      <div className="w-full flex justify-between items-center gap-1 p-2">
        <div className="w-80 h-14 relative m-auto">
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
