import Link from 'next/link';
import { LoginHeader, MenuBar } from '@/features/index';
import { FullImage, PATH } from '@/shared';

export function Header() {
  return (
    <div className="w-full">
      <LoginHeader />
      <div className="w-80 h-20 relative cursor-pointer m-2">
        <Link href={PATH.HOME}>
          <FullImage
            quality={100}
            src={'http://xn--o39ap53a48clb577biqbqwgirt.com/img/logo.png'}
            altContent={'메인로고'}
          />
        </Link>
      </div>
      <MenuBar />
    </div>
  );
}
