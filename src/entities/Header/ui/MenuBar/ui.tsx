'use client';

import { useState } from 'react';
import { dropList } from '../../constant';
import { Dropdown } from '../Dropdown/ui';

const menuLists = Object.keys(dropList);

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuBar({ setIsOpen }: Props) {
  const handleClick = () => {
    setIsOpen(prev => !prev); // Toggle dropdown
  };

  return (
    <div className="relative w-2/3 ml-auto cursor-pointer">
      <ul className="flex w-full h-12 justify-center items-center m-auto">
        {menuLists.map(menu => (
          <li
            key={menu}
            className="text-center text-2xl font-medium cursor-pointer relative inline-block"
            style={{ marginRight: '60px' }}
          >
            <p
              onClick={handleClick}
              className="flex justify-center text-center whitespace-nowrap"
            >
              {menu}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
