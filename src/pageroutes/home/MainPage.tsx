import { Gallery, MainCard, Notice, Redirect } from '@/entities';
import { getMainNotice } from '@/entities/Notice/api';
import { BasicSlider } from '@/shared';

const bannerImg = ['/assets/Banner.webp', '/assets/hand-4752642_1280.jpg'];

export async function MainPage() {
  const notice = await getMainNotice();

  return (
    <div className="w-full">
      <BasicSlider imageUrl={bannerImg} height={'595px'} />
      <div className="max-w-[1360px] mx-auto">
        <MainCard />
        <Redirect />
        <Notice notice={notice} />
      </div>
      <Gallery />
    </div>
  );
}
