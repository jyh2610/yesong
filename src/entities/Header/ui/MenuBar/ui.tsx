'use client';

import { useRouter } from 'next/navigation';
import { getFullPath } from '@/shared';
import { dropList, pathMapping } from '../../constant';

const menuLists = Object.keys(dropList);

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuBar({ setIsOpen }: Props) {
  const router = useRouter();

  const navigatePage = (parentKey: string, childKey: string) => {
    setIsOpen(false);
    const parentPath = pathMapping[parentKey]?.path;
    const child = pathMapping[parentKey]?.children?.[childKey];

    const fullPath = getFullPath(parentPath, child);

    router.push(fullPath);
  };

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      className="w-full h-12 cursor-pointer"
    >
      <ul className="w-full h-full flex justify-between items-center">
        {menuLists.map(menu => (
          <li
            key={menu}
            className="w-[125px] whitespace-nowrap h-full text-2xl font-medium cursor-pointer flex items-center justify-center"
            onClick={() => navigatePage(menu, dropList[menu][0])}
          >
            <span>{menu}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
