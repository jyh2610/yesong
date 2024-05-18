'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FullImage } from './FullImage';

import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  imageUrl: string[];
  height: string;
  isNavigation?: boolean;
  slidesPerView?: number;
}
export function BasicSlider({
  imageUrl,
  height,
  isNavigation,
  slidesPerView
}: Props) {
  return (
    <Swiper
      style={{
        width: '100%',
        height: height
      }}
      navigation={isNavigation ? true : false}
      modules={isNavigation ? [Navigation] : []}
      slidesPerView={slidesPerView ?? slidesPerView}
      loop={isNavigation ? true : false}
      spaceBetween={30}
    >
      {imageUrl.map((url, idx) => (
        <SwiperSlide className="w-full h-full" key={idx}>
          <FullImage src={url} altContent="슬라이더 이미지" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
