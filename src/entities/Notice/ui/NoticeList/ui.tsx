'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { IGetPostData, formatYYYYMMDD } from '@/shared';

export function NoticeList({ notice }: { notice: IGetPostData }) {
  const [isHover, setIsHover] = useState<number | null>(null);
  const route = useRouter();
  if (notice.content.length === 0) {
    return (
      <div className="w-3/5 p-2">
        <p className="h-[70px] flex justify-between items-center border-b-2 border-transparent hover:border-b-2 hover:border-brand-500">
          공지사항이 없습니다!
        </p>
      </div>
    );
  }
  return (
    <div className="w-3/5 p-2">
      <ul className="h-full gap-1 cursor-pointer">
        {notice.content.length > 0 &&
          notice.content.map((item, idx) => (
            <li
              key={idx}
              onMouseEnter={() => setIsHover(idx)}
              onMouseLeave={() => setIsHover(null)}
              onClick={() =>
                route.push(`/sub_page/detail/COMMUNITY_NOTICE/${item.id}`)
              }
              className="h-[70px] flex justify-between items-center border-b-2 border-transparent hover:border-b-2 hover:border-brand-500"
            >
              <p className="font-medium text-2xl">{item.title}</p>
              {isHover !== idx ? (
                <p className="font-normal text-lg text-[#777777]">
                  {formatYYYYMMDD(item.createdAt)}
                </p>
              ) : (
                <FaArrowRight size={36} color="#E33A9F" />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
