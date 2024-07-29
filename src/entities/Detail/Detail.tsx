'use client';

import { Divider } from '@nextui-org/divider';
import { useAuth } from '@/app/_providers/AuthProvider';
import { FullImage, IGetPost, formatYYYYMMDD } from '@/shared';
import { checkFileType } from '@/shared/utils/checkFileType';
import { useGetPostById } from './api';
import { RemoteButton } from './ui/RemoteButton';

export function Detail({ id, category }: { id: string; category: string }) {
  const { isLogin } = useAuth();
  const { data: res } = useGetPostById(id);

  const image = res?.files.filter(item => checkFileType(item.fileName)) || [];
  const file = res?.files.filter(item => !checkFileType(item.fileName)) || [];

  if (res === undefined) return null;
  return (
    <div>
      <div>
        <p className="font-bold text-xl">{res.title}</p>
        <div className="flex gap-4 mt-3">
          <div className="flex gap-2">
            <p>작성자</p>
            <p className="font-semibold">{res.author}</p>
          </div>

          <p>{formatYYYYMMDD(res.createdAt)}</p>
          <div className="flex gap-2">
            <p>조회</p>
            <p>{res.viewCount}회</p>
          </div>
        </div>
      </div>
      <Divider className="mt-4" />
      <div className="bg-gray-50 gap-3">
        {file.length > 0 &&
          file?.map((file, index) => (
            <a
              key={index}
              href={file.fileURL}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <p>{file.fileName}</p>
            </a>
          ))}
        {res.links.map((link, index) => (
          <a
            key={index}
            href={`https://${link.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <p>{link.comment}</p>
          </a>
        ))}
      </div>
      <Divider className="" />

      {isLogin && (
        <RemoteButton id={id} category={res.category} title={category} />
      )}
      <div
        className="mt-10"
        dangerouslySetInnerHTML={{ __html: res.content }}
      />

      {image.length > 0 &&
        image?.map((file, index) => (
          <div key={index} className="relative w-full h-[800px]">
            <FullImage src={file.fileURL} altContent="게시판 이미지" />
          </div>
        ))}
    </div>
  );
}
