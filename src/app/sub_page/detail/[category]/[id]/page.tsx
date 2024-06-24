import { Detail } from '@/entities';
import { getPostById } from '@/entities/Detail/api';

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await getPostById(id);
  return (
    <div>
      <Detail res={res} />
    </div>
  );
};

export default DetailPage;
