'use client';

import { Divider } from '@nextui-org/divider';
import { useAuth } from '@/app/_providers/AuthProvider';
import { FullImage, IGetPost, formatYYYYMMDD } from '@/shared';
import { useGetPostById } from './api';
import { RemoteButton } from './ui/RemoteButton';

export function Detail({ id }: { id: string }) {
  const { isLogin } = useAuth();
  const { data: res } = useGetPostById(id);

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
        {res.links.map((link, index) => (
          <a
            key={index}
            href={`https://${link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <p>{link}</p>
          </a>
        ))}
      </div>
      <Divider className="" />

      {isLogin && <RemoteButton id={id} category={res.category} />}
      <div
        className="mt-10"
        dangerouslySetInnerHTML={{ __html: res.content }}
      />

      {res.files.map((file, index) => (
        <div key={index} className="relative w-full h-[800px]">
          <FullImage src={file.fileURL} altContent="게시판 이미지" />
        </div>
      ))}
    </div>
  );
}
