import { Divider } from '@nextui-org/divider';
import { FullImage, IGetPost } from '@/shared';
import { RemoteButton } from './ui/RemoteButton';

export function Detail({ id, res }: { id: string; res: IGetPost }) {
  return (
    <div>
      <div>
        <p className="font-bold text-xl">{res.title}</p>
        <div className="flex gap-4 mt-3">
          <div className="flex gap-2">
            <p>작성자</p>
            <p className="font-semibold">{res.author}</p>
          </div>
          <p>{res.createdAt}</p>
          <div className="flex gap-2">
            <p>조회</p>
            <p>{res.viewCount}회</p>
          </div>
        </div>
      </div>
      <Divider className="my-4" />
      <RemoteButton id={id} category={res.category} />
      <div
        className="mt-10"
        dangerouslySetInnerHTML={{ __html: res.content }}
      />
      {res.links.map((link, index) => (
        <a
          key={index}
          href={`https://${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{link}</p>
        </a>
      ))}
      {res.files.map((file, index) => (
        <div key={index} className="relative w-full h-[800px]">
          <FullImage src={file.fileURL} altContent="게시판 이미지" />
        </div>
      ))}
    </div>
  );
}
