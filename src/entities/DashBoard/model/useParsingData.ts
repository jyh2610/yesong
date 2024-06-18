import dayjs from 'dayjs';
import { IGetPost } from '@/shared';
import { useGetPosts } from '../api';
import { MappedData, mappingData } from '../model/mappingData';

type UseCustomPostsProps = {
  page: number;
  category: string;
};

export function useParsingData({ page, category }: UseCustomPostsProps): {
  mappingRows: MappedData[] | undefined;
  pages: number;
  parsedData: IGetPost[] | undefined;
} {
  const { data } = useGetPosts({ page, category });
  const mappingRows = data && mappingData(data);
  const pages = data ? Math.ceil(data.length / 8) : 1;

  const parsedData: IGetPost[] | undefined =
    data &&
    data.map(item => ({
      ...item,
      createdAt: dayjs(item.createdAt).format('YYYY-MM-DD'),
      id: page * Number(item.id)
    }));

  return { mappingRows, pages, parsedData };
}
