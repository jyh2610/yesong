'use client';

import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FullImage } from '@/shared';
import 'swiper/css/effect-fade';
const bannerImg = [
  '/assets/Banner.jpeg',
  '/assets/Banner2.jpeg',
  '/assets/Banner3.jpeg'
];

function Silder() {
  return (
    <Swiper
      style={{
        width: '100%',
        height: '595px'
      }}
      effect={'fade'}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      modules={[Autoplay, EffectFade]}
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
