import { IGetPost } from '@/shared';

export interface MappedData {
  key: string;
  id: number;
  title: string;
  author: string;
  createdAt: string;
  count: number;
}

export const mappingData = (data: IGetPost[]): MappedData[] => {
  const res: MappedData[] =
    data.length > 0
      ? data.map(post => ({
          key: post.id.toString(),
          id: post.id,
          title: post.title,
          author: post.author,
          createdAt: post.createdAt,
          count: post.viewCount
        }))
      : [];
  return res;
};
