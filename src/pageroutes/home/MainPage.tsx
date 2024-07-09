import { Gallery, MainCard, Notice, Redirect } from '@/entities';
import Silder from './ui/Silder';

export function MainPage() {
  return (
    <div className="w-full">
      <Silder />
      <div className="max-w-[1360px] mx-auto">
        <MainCard />
        <Redirect />
        <Notice />
      </div>
      <Gallery />
    </div>
  );
}
