'use client';

import { useRouter } from 'next/navigation';
import { useGetSearchId } from '@/entities/DashBoard/api';
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
  const { data } = useGetSearchId(id || 0);
  const path =
    id !== null ? `/write/${category}/?postId=${id}` : `/write/${category}`;
  return (
    <div className="w-full">
      <p className="font-semibold text-5xl">{title}</p>
      <UploadButton path={path} />
      {id && data && (
        <div
          className="mt-10"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      )}
      {/* {id && data ? (
        <div
          className="mt-10"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      ) : (
        <div className="flex flex-col">
          {src?.map((item, index) => (
            <div key={index} className="relative w-full h-[800px]">
              <FullImage src={item} altContent={'인사말'} />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}
