import { FullImage } from '@/shared';
import { NoticeList } from './ui';

export function Notice() {
  return (
    <section className="mt-40 px-2 relative">
      <p className=" text-5xl font-semibold">공지사항</p>
      <div className="flex justify-between gap-24">
        <NoticeList />
        <div className="w-2/5 h-80 my-auto flex justify-center items-center rounded-[20px] border p-1">
          <div className="relative  w-96 h-60">
            <FullImage src={'/assets/numberImg.png'} altContent={''} />
          </div>
        </div>
      </div>
    </section>
  );
}
