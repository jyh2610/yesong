'use client';

import { Image, Pagination } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useGetGalleryList } from '../apis';

const showPerPage = 12;

export function GalleryList() {
  const [page, setPage] = useState(1);
  const { data } = useGetGalleryList(page);
  const pages = data ? Math.ceil(data.content.length / showPerPage) : 1;

  const route = useRouter();

  if (!data || data.content.length === 0) {
    return <p>이미지가 없습니다.</p>;
  }
  return (
    <div className="mt-10 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data &&
          data.content.map(file => (
            <div
              className=" w-52 h-52 flex justify-center items-center bg-slate-500 rounded-xl hover:cursor-pointer"
              key={file.files[0]?.fileName}
              onClick={() =>
                route.push(`/sub_page/detail/GALLERY_GALLERY/${file.id}`)
              }
            >
              <Image
                isZoomed
                width="100%"
                height="100%"
                alt="gallery image"
                src={file.files[0]?.fileURL}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
      </div>
      <div className="w-full mt-6 flex justify-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="secondary"
          page={page}
          total={pages}
          onChange={page => setPage(page)}
        />
      </div>
    </div>
  );
}
