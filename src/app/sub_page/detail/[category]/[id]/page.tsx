import { Detail } from '@/entities';
import { getPostById } from '@/entities/Detail/api';

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await getPostById(id);
  return <Detail id={id} res={res} />;
};

export default DetailPage;
