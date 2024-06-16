import { FullImage } from '@/shared';

export function GalleryList() {
  const imgList: string[] = [];
  if (imgList.length === 0) {
    return <div>이미지가 없습니다.</div>;
  }

  return (
    <div>
      {imgList.map((src, idx) => (
        <div key={idx} className="relative">
          <FullImage src={src} altContent="갤러리 이미지" />
        </div>
      ))}
    </div>
  );
}
