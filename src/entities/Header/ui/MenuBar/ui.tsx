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
      className="relative ml-auto cursor-pointer"
    >
      <ul className="w-full h-12 flex justify-between items-center">
        {menuLists.map(menu => (
          <li
            key={menu}
            className="h-full text-2xl font-medium cursor-pointer whitespace-nowrap"
          >
            <span className="">{menu}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
