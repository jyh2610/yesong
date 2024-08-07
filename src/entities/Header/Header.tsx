'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FullImage, PATH } from '@/shared';
import { Dropdown, LoginHeader, MenuBar } from './ui';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative pb-2">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-end pt-2">
          <Link href={'/'}>
            <div className="w-[300px] h-14 relative m-auto">
              <FullImage src="/assets/newLogo.jpeg" altContent="메인로고" />
            </div>
          </Link>
          <div className="w-2/3 flex flex-col justify-end">
            <LoginHeader />
            <div className="relative">
              <MenuBar setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Dropdown setIsOpen={setIsOpen} />}
    </header>
  );
}
