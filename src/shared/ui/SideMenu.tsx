'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import { pathMapping } from '@/entities/Header/constant';
import { companyInfo } from '../constant/companyInfo';
import { list, ListKeys } from '../constant/sidemenuList';
import { RenderSubMenu } from './RenderSubMenu';

export function SideMenu() {
  const [activeMenuKey, setActiveMenuKey] = useState<string>('');

  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split('/');
  const parentPath = `/${segments[2]}`;
  const lastSegment = segments[segments.length - 1];

  useEffect(() => {
    const currentMenu = Object.entries(pathMapping).find(
      ([, value]) => value.path === parentPath
    );

    if (currentMenu && currentMenu[1].children) {
      const foundKey =
        Object.entries(currentMenu[1].children).find(
          ([, value]) => value === `/sub_page/${lastSegment}`
        )?.[0] || '';
      setActiveMenuKey(lastSegment);
    }
  }, [parentPath, lastSegment]);

  const currentMenu = Object.entries(pathMapping).find(
    ([, value]) => value.path === parentPath
  );

  const menuList = currentMenu?.[1].children
    ? Object.keys(currentMenu[1].children)
    : [];

  const generatePath = (menu: string) => {
    const child = currentMenu && currentMenu[1].children[menu];
    if (typeof child === 'string') {
      return '/sub_page' + parentPath + child;
    }
    if (typeof child === 'object' && 'path' in child) {
      return '/sub_page' + parentPath + child.path;
    }
    return '/sub_page' + parentPath;
  };

  return (
    <div className="w-1/3 font-medium text-2x text-gray-700 ">
      <p className="pb-3 text-2xl font-semibold border-b-2 border-brand-200 text-gray-800">
        {currentMenu?.[0]}
      </p>
      {menuList.map((menu, index) => {
        const child = currentMenu?.[1].children[menu];
        return (
          <div key={index}>
            <p
              className={`py-2 text-[20px] font-semibold cursor-pointer ${menu === list[activeMenuKey as ListKeys] ? 'text-brand-600' : 'text-font-gray'}`}
              onClick={() => {
                router.push(generatePath(menu));
              }}
            >
              {menu}
            </p>
            {child && (
              <RenderSubMenu
                parentPath={parentPath}
                lastSegment={lastSegment}
                activeMenuKey={activeMenuKey}
                menu={menu}
                child={child}
              />
            )}
          </div>
        );
      })}
      <Info />
    </div>
  );
}

const Info = () => {
  return (
    <div className="p-5 bg-brand border border-brand-300 rounded-2xl text-gray-700 mt-14">
      <div className="text-center">
        <p className="text-gray-800 font-semibold text-2xl">고객센터</p>
        <p className="mt-2">언제든지 전화주시면</p>
        <p>정성껏 답변드리겠습니다.</p>
      </div>
      <div className="flex gap-2 mt-5">
        <IoMdCall size={24} color="#FA98D3" />
        <p className="text-brand-600">{companyInfo.number}</p>
      </div>
      <div className="flex gap-2 mt-3">
        <FaLocationDot size={24} color="#FA98D3" />
        <div>
          <p className="">경기도 성남시 수정구 산성대로 331</p>
          <p>한신프라자 1606호</p>
        </div>
      </div>
    </div>
  );
};
