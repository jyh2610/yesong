import { Gallery, MainCard, Notice, Redirect } from '@/entities';
import { BasicSlider } from '@/shared';

const bannerImg = ['/assets/Banner.jpeg'];

export function MainPage() {
  return (
    <div className="w-full">
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
