import { MainCard } from '@/features';
import { BasicSlider } from '@/shared';
import { mainSlide } from '@/shared/constant/imageSrc';
import { Notice } from '@/widgets';

const bannerImg = ['/assets/hand-4752642_1280.jpg', '/assets/Banner.png'];

export function MainPage() {
  return (
    <div className="w-full">
      <BasicSlider imageUrl={bannerImg} />
      <div className="max-w-[1360px] mx-auto">
        <MainCard />
        <Notice />
      </div>
    </div>
  );
}
