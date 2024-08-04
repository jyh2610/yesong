import { getPosts } from '@/entities/DashBoard/api';
import { FullImage } from '@/shared';

async function Greeting() {
  const res = await getPosts({ page: 0, category: 'CENTER_INTRO' });

  return (
    <div className="w-full">
      <p className="font-semibold text-5xl">인사말</p>

      <p>{res.content.length > 0 && res.content[0].content}</p>

      <div className="relative w-full h-[800px]">
        <FullImage
          src={
            res.content.length > 0
              ? res.content[0].files[0].fileName
              : '/assets/Greeting.jpg'
          }
          altContent={'인사말'}
        />
      </div>
    </div>
  );
}

export default Greeting;
