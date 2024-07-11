'use client';

import React from 'react';
import { BasicSlider, IGetPostData } from '@/shared';
import { getMainGallery, useGetMainGallery } from './api';
import { extractFileURLs } from './utills';

export function Gallery() {
  const { data: res } = useGetMainGallery();
  if (res === undefined) return <div>Loading...</div>;
  const imgArr = extractFileURLs(res);

  return (
    <section className="bg-[#FFF5FB] py-40">
      <div className="max-w-[1360px] mx-auto">
        <p className=" text-5xl font-semibold  pb-10">갤러리</p>
        <BasicSlider
          res={res}
          imageUrl={imgArr}
          height={'440px'}
          isNavigation={true}
          slidesPerView={3}
        />
      </div>
    </section>
  );
}
