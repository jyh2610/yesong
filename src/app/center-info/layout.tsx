import { ReactNode } from 'react';
import { FullImage, SideMenu } from '@/shared';

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="relative w-full h-52">
        <FullImage src={'/assets/SideBanner.png'} altContent="" />
      </div>
      <div className="max-w-[1360px] mx-auto mt-20 flex items-center">
        <SideMenu />
        <div>
          <p>오시는길</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
