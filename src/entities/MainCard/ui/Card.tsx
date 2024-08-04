'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FullImage } from '@/shared';

export function Card({ card }: { card: string[] }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const route = useRouter();
  return (
    <div
      key={card[1]}
      style={{
        backgroundColor: card[3],
        border: '2px solid',
        borderColor: isHovered ? card[4] : 'transparent'
      }}
      className="w-4/12 flex flex-col justify-center items-center gap-5 rounded-3xl px-2 py-8 border-2 transition-all hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => route.push(card[5])}
    >
      <div className="w-32 h-32 relative">
        <FullImage src={card[0]} altContent={'카드 이미지'} />
      </div>
      <div className="text-center">
        <p className="mb-4 font-normal text-2xl text-gray-900">{card[1]}</p>
        <div
          className="text-base text-center leading-[25px] text-gray-800"
          dangerouslySetInnerHTML={{ __html: card[2].replace(/\n/g, '<br />') }}
        />
      </div>
    </div>
  );
}
