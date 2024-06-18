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
      className="w-1/3 flex flex-col justify-center items-center gap-5 rounded-3xl px-7 py-8 border-2 transition-all hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => route.push(card[5])}
    >
      <div className="w-32 h-32 relative">
        <FullImage src={card[0]} altContent={'카드 이미지'} />
      </div>
      <div className="text-center">
        <p className="mb-4 font-normal text-2xl">{card[1]}</p>
        <div className="text-lg leading-[25px]">{card[2]}</div>
      </div>
    </div>
  );
}
