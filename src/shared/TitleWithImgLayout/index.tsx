import { FullImage } from '@/shared';
interface Props {
  title: string;
  src: string[];
}

export function TitleWithImgLayout({ title, src }: Props) {
  return (
    <div className="w-full">
      <p className="font-semibold text-5xl">{title}</p>
      <div className="flex flex-col">
        {src.map((item, index) => (
          <div key={index} className="relative w-full h-[800px]">
            <FullImage src={item} altContent={'인사말'} />
          </div>
        ))}
      </div>
    </div>
  );
}
