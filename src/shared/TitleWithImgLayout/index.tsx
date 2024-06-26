'use client';

import { useRouter } from 'next/navigation';
import { menuMapping } from '@/entities/DashBoard/constant';
import { FullImage } from '@/shared';
interface Props {
  title: string;
  src: string[];
  id: number | null;
  category: string;
}

export function TitleWithImgLayout({ id, title, src, category }: Props) {
  const router = useRouter();

  const path = id !== null ? `/write/${category}/${id}` : `/write/${category}`;
  return (
    <div className="w-full">
      <p className="font-semibold text-5xl">{title}</p>
      {/* <div className="flex justify-end">
        <div className="flex gap-2 text-white">
          <button
            className="bg-gray-600 rounded-md p-2"
            onClick={() => router.push(path)}
          >
            글쓰기
          </button>
        </div>
      </div> */}
      <div className="flex flex-col">
        {src?.map((item, index) => (
          <div key={index} className="relative w-full h-[800px]">
            <FullImage src={item} altContent={'인사말'} />
          </div>
        ))}
      </div>
    </div>
  );
}
