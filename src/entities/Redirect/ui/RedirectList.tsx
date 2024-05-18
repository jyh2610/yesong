import Link from 'next/link';
import React from 'react';
import { FullImage } from '@/shared';
import { ListType } from '../types';

type RedirectListProps = {
  data: ListType;
  line?: boolean;
};

export function RedirectList({ data, line }: RedirectListProps) {
  return (
    <div
      className={`w-1/2 flex items-center justify-between gap-24 ${line ? 'border-r border-solid  pr-14' : 'pl-14'}`}
    >
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-medium whitespace-nowrap">{data.title}</p>
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></p>
      </div>
      <Link href={data.redirect}>
        <div className="relative w-48 h-20">
          <FullImage
            src={data.img}
            altContent={'리다이렉트 로고'}
            quality={100}
          />
        </div>
      </Link>
    </div>
  );
}
