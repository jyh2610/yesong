'use client';

import Slider from 'react-slick';
import { FullImage } from './FullImage';

interface Props {
  imageUrl: string[];
}
export function BasicSlider({ imageUrl }: Props) {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <Slider {...settings}>
      {imageUrl.map((url, idx) => (
        <div key={idx}>
          <FullImage src={url} altContent="슬라이더 이미지" />
        </div>
      ))}
    </Slider>
  );
}
