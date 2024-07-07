'use client';

import { useRouter } from 'next/navigation'; // next/router를 사용합니다.
import { IPathMapping } from '@/entities/Header/constant';
import { list, ListKeys } from '../constant/sidemenuList';

interface RenderSubMenuProps {
  parentPath: string;
  activeMenuKey: string;
  lastSegment: string;
  menu: string;
  child: string | IPathMapping;
}
const constructFullPath = (
  parentPath: string,
  subPath: string | IPathMapping
): string => {
  if (typeof subPath === 'string') {
    return `${parentPath}/visit_care${subPath}`;
  }
  return constructFullPath(parentPath, subPath.path);
};

export const RenderSubMenu = ({
  parentPath,
  activeMenuKey,
  lastSegment,
  menu,
  child
}: RenderSubMenuProps) => {
  const router = useRouter();

  if (typeof child === 'object' && 'children' in child) {
    return (
      <div className="pl-4">
        {Object.entries(child.children).map(([subMenu, subPath]) => {
          const fullPath = constructFullPath(`/sub_page${parentPath}`, subPath);
          return (
            <p
              key={subMenu}
              className={`py-2 cursor-pointer ${subMenu === list[activeMenuKey as ListKeys] ? 'text-brand-600' : 'text-font-gray'} ${lastSegment === activeMenuKey ? 'text-brand-600' : ''}`} // 마지막 세그먼트가 activeMenuKey와 일치하는 경우 클래스를 추가합니다.
              onClick={() => router.push(fullPath)}
            >
              {subMenu}
            </p>
          );
        })}
      </div>
    );
  }
  return null;
};
