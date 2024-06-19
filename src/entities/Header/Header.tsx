'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FullImage, PATH } from '@/shared';
import { Dropdown, LoginHeader, MenuBar } from './ui';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pb-2">
      <div className="w-[1360px] mx-auto">
        <div className="flex justify-between items-end pt-2">
          <Link href={PATH.HOME}>
            <div className="w-[300px] h-14 relative m-auto">
              <FullImage src="/assets/Logo.png" altContent="메인로고" />
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
    </div>
  );
}
