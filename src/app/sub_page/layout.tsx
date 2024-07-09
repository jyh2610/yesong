import { ReactNode } from 'react';
import { FullImage, SideMenu } from '@/shared';

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="pb-40">
      <div className="relative w-full h-52">
        <FullImage src={'/assets/Banner3.jpeg'} altContent="" />
      </div>
      <div className="max-w-[1360px] mx-auto mt-16 flex gap-28">
        <SideMenu />
        <div className="w-2/3">{children}</div>
      </div>
    </div>
  );
}

export default layout;
