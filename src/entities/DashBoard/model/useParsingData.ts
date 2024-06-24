'use client';

import dayjs from 'dayjs';
import { IGetPost, formatYYYYMMDD } from '@/shared';
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
  const mappingRows = data ? mappingData(data.content) : undefined;
  const pages = data ? Math.ceil(data.totalElements / 8) : 1;

  const parsedData: IGetPost[] | undefined =
    data && data.content.length > 0
      ? data.content.map(item => ({
          ...item,
          createdAt: formatYYYYMMDD(item.createdAt),
          id: page * Number(item.id)
        }))
      : undefined;

  return { mappingRows, pages, parsedData };
}
