'use client';
import { useState } from 'react';
import { Dropdown } from '@/shared';

interface DropList {
  [key: string]: string[];
}
const dropList: DropList = {
  센터소개: ['인사말', '오시는길'],
  노인장기요양보험안내: ['노인장기요양보험안내'],
  이용안내: ['방문요약', '방문목욕'],
  커뮤니티: ['공지사항', '상담신청'],
  자료실: ['건강정보', '교육자료']
};
const menuLists = Object.keys(dropList);

export function MenuBar() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number | null) => {
    setClickedIndex(index === clickedIndex ? null : index); // Toggle dropdown
  };
  return (
    <div className="w-full  bg-pink-100">
      <ul className=" h-12 flex justify-around items-center m-auto">
        {menuLists.map((menu, index) => (
          <li
            key={menu}
            className="w-full h-full text-center cursor-pointer  hover:bg-pink-400"
            onClick={() => handleClick(index)}
            onMouseLeave={() => handleClick(null)}
          >
            <p className="relative h-full flex items-center justify-center p-2 font-extrabold">
              {menu}
            </p>
            {clickedIndex === index && <Dropdown data={dropList[menu]} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
