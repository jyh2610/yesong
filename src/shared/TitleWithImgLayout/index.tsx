'use client';

import { Divider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useGetSearchId } from '@/entities/DashBoard/api';
import { FullImage } from '@/shared';
import { UploadButton } from './ui/UploadButton';
interface Props {
  title: string;
  src: string[];
  link: string[];
  id: number | null;
  category: string;
}

export function TitleWithImgLayout({ id, src, title, link, category }: Props) {
  const router = useRouter();
  const { data } = useGetSearchId(id || 0);
  const path =
    id !== null ? `/write/${category}/?postId=${id}` : `/write/${category}`;
  return (
    <div className="w-full">
      <p className="font-semibold text-5xl">{title}</p>
      <UploadButton path={path} />
      <Divider className="mt-5" />
      <div className="bg-gray-50 gap-3">
        {link &&
          link.map((link, index) => (
            <a
              key={index}
              href={`https://${link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <p>{link}</p>
            </a>
          ))}
      </div>

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
