'use client';

import { useState } from 'react';
import { dropList } from '../../constant';
import { Dropdown } from '../Dropdown/ui';

const menuLists = Object.keys(dropList);

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuBar({ setIsOpen }: Props) {
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      className="relative w-2/3 ml-auto cursor-pointer"
    >
      <ul className="w-full h-12 flex justify-center items-center m-auto gap-1">
        {menuLists.map(menu => (
          <li
            key={menu}
            className="w-full h-full text-center text-2xl font-medium cursor-pointer relative"
          >
            <p className="w-full h-full flex justify-center text-center whitespace-nowrap">
              {menu}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
