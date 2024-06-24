import { Divider } from '@nextui-org/divider';
import { FullImage, IGetPost } from '@/shared';

export async function Detail({ res }: { res: IGetPost }) {
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
      <div dangerouslySetInnerHTML={{ __html: res.content }} />
      {res.links.map((link, index) => (
        <p key={index}>{link}</p>
      ))}
      {res.files.map((file, index) => (
        <div key={index} className="relative w-full h-[800px]">
          <FullImage src={file.fileURL} altContent="게시판 이미지" />
        </div>
      ))}
    </div>
  );
}
