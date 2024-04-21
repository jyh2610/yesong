import { BasicSlider } from '@/shared';
import { mainSlide } from '@/shared/constant/imageSrc';

export function MainPage() {
  return (
    <div>
      <div className="w-full relative h-1/3">
        <BasicSlider imageUrl={['/public/assests/hand-4752642_1280.jpg']} />
      </div>
    </div>
  );
}
