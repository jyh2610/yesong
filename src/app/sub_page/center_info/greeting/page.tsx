import { FullImage } from '@/shared';

function Greeting() {
  return (
    <div className="w-full">
      <p className="font-semibold text-5xl">인사말</p>
      <div className="relative w-full h-[800px]">
        <FullImage src={'/assets/greeting.jpg'} altContent={'인사말'} />
      </div>
    </div>
  );
}

export default Greeting;
