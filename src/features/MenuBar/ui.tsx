'use client';
import { useState } from 'react';
import { Dropdown } from '@/shared';

interface DropList {
  [key: string]: string[];
}
const dropList: DropList = {
  센터소개: ['인사말', '오시는길'],
  '노인장기요양보험 안내': ['노인장기요양보험안내'],
  '이용 안내': ['방문요양', '방문목욕'],
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
    <div className="w-2/3 m-auto">
      <ul className="h-12 flex items-center m-auto">
        {menuLists.map((menu, index) => (
          <li
            key={menu}
            className="w-full h-full text-center text-2xl  p-2 font-medium cursor-pointer relative"
            onClick={() => handleClick(index)}
            // onMouseLeave={() => handleClick(null)}
          >
            <span className="whitespace-nowrap">{menu}</span>
            {clickedIndex === index && <Dropdown data={dropList[menu]} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
