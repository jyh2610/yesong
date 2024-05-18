import Link from 'next/link';
import { FullImage, PATH } from '@/shared';
import { LoginHeader, MenuBar } from './ui';

export function Header() {
  return (
    <div className="w-2/3 mx-auto">
      <LoginHeader />
      <div className="w-full flex justify-between items-center gap-1 p-2">
        <Link href={PATH.HOME}>
          <div className="w-80 h-14 relative m-auto">
            <FullImage src="/assets/Logo.png" altContent={'메인로고'} />
          </div>
        </Link>
        <MenuBar />
      </div>
    </div>
  );
}
