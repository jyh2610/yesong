import { useState } from 'react';
import { FullImage } from '@/shared';
import { useGetGalleryList } from '../apis';

export function GalleryList() {
  const [page, setPage] = useState(1);
  const { data } = useGetGalleryList(page);
  const imgList: string[] = [];
  if (data?.length === 0) {
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
