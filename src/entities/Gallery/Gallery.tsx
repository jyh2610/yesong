import React from 'react';
import { BasicSlider, IGetPostData } from '@/shared';
import { getMainGallery } from './api';
import { extractFileURLs } from './utills';

export async function Gallery() {
  const res = await getMainGallery();

  const imgArr = extractFileURLs(res);

  return (
    <section className="bg-[#FFF5FB] py-40">
      <div className="max-w-[1360px] mx-auto">
        <p className=" text-5xl font-semibold  pb-10">갤러리</p>
        <BasicSlider
          imageUrl={imgArr}
          height={'440px'}
          isNavigation={true}
          slidesPerView={3}
        />
      </div>
    </section>
  );
}
