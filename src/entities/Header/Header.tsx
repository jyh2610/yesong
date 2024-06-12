'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FullImage, PATH } from '@/shared';
import { Dropdown, LoginHeader, MenuBar } from './ui';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-2/3 mx-auto ">
      <LoginHeader />
      {/* <div className="w-full flex justify-between items-center gap-1 p-2"> */}

      <div className="flex justify-between items-center p-2">
        <Link href={PATH.HOME}>
          <div className="w-80 h-14 relative m-auto">
            <FullImage src="/assets/Logo.png" altContent={'메인로고'} />
          </div>
        </Link>
        {/* </div> */}
        <div onMouseLeave={() => setIsOpen(false)}>
          <MenuBar setIsOpen={setIsOpen} />
          {isOpen && <Dropdown setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}
