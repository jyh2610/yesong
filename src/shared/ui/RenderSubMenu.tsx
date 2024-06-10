import router from 'next/router';
import { IPathMapping } from '@/entities/Header/constant';

export const renderSubMenu = (
  parentPath: string,
  activeMenuKey: string,
  menu: string,
  child: string | IPathMapping
) => {
  if (typeof child === 'object' && 'children' in child) {
    return (
      <div className="pl-4">
        {Object.entries(child.children).map(([subMenu, subPath]) => (
          <p
            key={subMenu}
            className={`py-2 cursor-pointer ${subMenu === activeMenuKey ? 'text-brand-600' : 'text-font-gray'}`}
            onClick={() => router.push(`${parentPath}${subPath}`)}
          >
            {subMenu}
          </p>
        ))}
      </div>
    );
  }
  return null;
};
