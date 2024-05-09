'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FullImage } from './FullImage';
import 'swiper/css';
interface Props {
  imageUrl: string[];
}
export function BasicSlider({ imageUrl }: Props) {
  return (
    <Swiper
      style={{
        width: '100%',
        height: '595px'
      }}
    >
      {imageUrl.map((url, idx) => (
        <SwiperSlide className="w-full h-full " key={idx}>
          <FullImage src={url} altContent="슬라이더 이미지" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
