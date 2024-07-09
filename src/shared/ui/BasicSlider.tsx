'use client';

import { useRouter } from 'next/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IGetPostData } from '../types/posts';
import { FullImage } from './FullImage';
import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  imageUrl: string[];
  height: string;
  isNavigation?: boolean;
  slidesPerView?: number;
  onClick?: () => void;
  res?: IGetPostData;
}
export function BasicSlider({
  imageUrl,
  height,
  isNavigation,
  slidesPerView,
  onClick,
  res
}: Props) {
  const route = useRouter();
  if (!res) return null;
  const formatLoopSrc =
    imageUrl.length < 4 ? [...res?.content, ...res?.content] : res?.content;

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
      {formatLoopSrc.map((url, idx) => (
        <SwiperSlide className="w-full h-full" key={idx}>
          <div
            className="hover:cursor-pointer"
            onClick={() =>
              route.push(`/sub_page/detail/GALLERY_GALLERY/${url.id}`)
            }
          >
            <FullImage
              src={url.files[0]?.fileURL || ''}
              altContent="슬라이더 이미지"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
