'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FullImage } from '@/shared';

const bannerImg = ['/assets/Banner.jpeg'];

function Silder() {
  return (
    <Swiper
      style={{
        width: '100%',
        height: '595px'
      }}
      loop={bannerImg.length > 3 ?? true}
      spaceBetween={30}
    >
      {bannerImg.map((url, idx) => (
        <SwiperSlide className="w-full h-full" key={idx}>
          <FullImage src={url} altContent="슬라이더 이미지" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Silder;
