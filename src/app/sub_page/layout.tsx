import Image from 'next/image';
import { ReactNode } from 'react';
import { FullImage, SideMenu } from '@/shared';

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="mb-40">
      <div className="relative w-screen h-52">
        {/* <FullImage src={'/assets/Banner.jpeg'} altContent="" /> */}
        <Image
          quality={100}
          src={'/assets/subBanner.jpeg'}
          alt={'subBanner'}
          fill={true}
          sizes="100%, 100%"
          className="object-cover"
          priority
        />
      </div>
      <div className="max-w-[1360px] mx-auto mt-16 flex gap-28">
        <SideMenu />
        <div className="w-2/3">{children}</div>
      </div>
    </div>
  );
}

export default layout;
