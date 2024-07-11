'use client';

import { useRouter } from 'next/navigation';
import { FullImage } from '@/shared';
import { UploadButton } from './ui/UploadButton';
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
      <UploadButton path={path} />
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
