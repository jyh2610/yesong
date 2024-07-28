import { Detail } from '@/entities';
import { getPostById, useGetPostById } from '@/entities/Detail/api';

const DetailPage = async ({
  params
}: {
  params: { category: string; id: string };
}) => {
  const { id, category } = params;

  return <Detail id={id} category={category} />;
};

export default DetailPage;
