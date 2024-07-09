'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Gallery, MainCard, Notice, Redirect } from '@/entities';
import { BasicSlider, FullImage } from '@/shared';

const bannerImg = ['/assets/Banner.jpeg'];

export function MainPage() {
  return (
    <div className="w-full">
      <Swiper
        style={{
          width: '100%',
          height: '595px'
        }}
        loop={true}
        spaceBetween={30}
      >
        {bannerImg.map((url, idx) => (
          <SwiperSlide className="w-full h-full" key={idx}>
            <FullImage src={url} altContent="슬라이더 이미지" />
          </SwiperSlide>
        ))}
      </Swiper>
      <BasicSlider imageUrl={bannerImg} height={'595px'} />
      <div className="max-w-[1360px] mx-auto">
        <MainCard />
        <Redirect />
        <Notice />
      </div>
      <Gallery />
    </div>
  );
}
