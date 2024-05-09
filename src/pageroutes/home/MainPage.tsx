import { MainCard } from '@/features';
import { BasicSlider } from '@/shared';
import { mainSlide } from '@/shared/constant/imageSrc';

const bannerImg = ['/assets/hand-4752642_1280.jpg', '/assets/Banner.png'];

export function MainPage() {
  return (
    <div className="w-full relative">
      <BasicSlider imageUrl={bannerImg} />
      <MainCard />
    </div>
  );
}
