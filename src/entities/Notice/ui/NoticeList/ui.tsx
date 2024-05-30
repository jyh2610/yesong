'use client';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const dataList = [
  '2024 방문목요 급여수가 및 본인부담금',
  '2024 방문요양 월한도액 및 본인부담금 변경고시',
  '2023 방문요양 월한도액 및 본인부담금 변경고시',
  '노인장기요양보험 이용 안내',
  '우성재가복지센터 홈페이지가 새롭게 단장되었습니다'
];

export function NoticeList() {
  const [isHover, setIsHover] = useState<number | null>(null);
  return (
    <div className="w-3/5 p-2">
      <ul className="h-full gap-1 cursor-pointer">
        {dataList.map((item, idx) => (
          <li
            key={idx}
            onMouseEnter={() => setIsHover(idx)}
            onMouseLeave={() => setIsHover(null)}
            className="h-[70px] flex justify-between items-center border-b-2 border-transparent hover:border-b-2 hover:border-brand-500"
          >
            <p className="font-medium text-2xl">{item}</p>
            {isHover !== idx ? (
              <p className="font-normal text-lg text-[#777777]">2024-01-02</p>
            ) : (
              <FaArrowRight size={36} color="#E33A9F" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
