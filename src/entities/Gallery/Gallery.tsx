import React from 'react';
import { BasicSlider } from '@/shared';

const slideImg = [
  '/assets/gallery1.png',
  '/assets/gallery2.png',
  '/assets/gallery3.png'
];

export function Gallery() {
  return (
    <section className="bg-[#FFF5FB]">
      <div className="max-w-[1360px] mx-auto">
        <p className=" text-5xl font-semibold pt-40 pb-10">갤러리</p>
        <BasicSlider
          imageUrl={slideImg}
          height={'440px'}
          isNavigation={true}
          slidesPerView={3}
        />
      </div>
    </section>
  );
}
