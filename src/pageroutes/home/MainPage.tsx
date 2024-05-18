import { Gallery, MainCard, Notice, Redirect } from '@/entities';
import { BasicSlider } from '@/shared';
import { mainSlide } from '@/shared/constant/imageSrc';

const bannerImg = ['/assets/Banner.png', '/assets/hand-4752642_1280.jpg'];

export function MainPage() {
  return (
    <div className="w-full">
      <BasicSlider imageUrl={bannerImg} height={'595px'} />
      <div className="max-w-[1360px] mx-auto">
        <MainCard />
        <Notice />
        <Redirect />
      </div>
      <Gallery />
    </div>
  );
}
