'use client';

import { Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ListType } from '../types';

type RedirectListProps = {
  data: ListType;
  line?: boolean;
};

export function RedirectList({ data, line }: RedirectListProps) {
  const [isHover, setIsHover] = useState(false);
  const route = useRouter();
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => window.open(data.redirect, '_blank')}
      className={`hover:cursor-pointer w-1/2 flex items-center justify-between gap-24 ${line ? 'border-r border-solid  pr-14' : 'pl-14'}`}
    >
      <div className="flex flex-col gap-5">
        <p
          className={`text-2xl font-medium whitespace-nowrap ${isHover && 'text-brand-400'}`}
        >
          {data.title}
        </p>
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></p>
      </div>
      <div>
        <Image width={'full'} alt="redirect logo" src={data.img} />
      </div>
    </div>
  );
}
