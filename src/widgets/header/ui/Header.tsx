import { FullImage } from '@/shared';
import { LoginHeader } from './LoginHeader';

export function Header() {
  return (
    <div>
      <LoginHeader />
      <div className="w-80 h-20 relative cursor-pointer">
        <FullImage
          quality={100}
          src={'http://xn--o39ap53a48clb577biqbqwgirt.com/img/logo.png'}
          altContent={'메인로고'}
        />
      </div>
    </div>
  );
}
