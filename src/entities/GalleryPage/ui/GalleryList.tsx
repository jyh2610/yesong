'use client';

import { Image, Pagination } from '@nextui-org/react';
import { useState } from 'react';
import { useGetGalleryList } from '../apis';

const showPerPage = 12;

export function GalleryList() {
  const [page, setPage] = useState(1);
  const { data } = useGetGalleryList(page);
  const pages = data ? Math.ceil(data.length / showPerPage) : 1;

  if (!data || data.length === 0) {
    return <div>이미지가 없습니다.</div>;
  }

  return (
    <>
      <div>
        {data[0] &&
          data[0].files?.map(file => (
            <Image
              key={file.fileName}
              isZoomed
              width={240}
              alt="gallery image"
              src={file.fileURL}
            />
          ))}
      </div>
      <Pagination
        isCompact
        showControls
        showShadow
        color="secondary"
        page={page}
        total={pages}
        onChange={page => setPage(page)}
      />
    </>
  );
}
