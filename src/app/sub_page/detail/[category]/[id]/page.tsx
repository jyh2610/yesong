import { Detail } from '@/entities';
import { getPostById, useGetPostById } from '@/entities/Detail/api';

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <Detail id={id} />;
};

export default DetailPage;
