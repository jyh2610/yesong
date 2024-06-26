import { getPosts } from '@/entities/DashBoard/api';
import { TitleWithImgLayout } from '@/shared';

async function LongTermCare() {
  const res = await getPosts({ page: 0, category: 'INSURANCE_INFO' });
  const urlArr = (res.content[0] &&
    res.content[0].files.map(file => file.fileURL)) || [
    '/assets/long_term.jpeg',
    '/assets/long_term3.jpeg'
  ];
  return (
    <TitleWithImgLayout
      title={'노인장기요양보험 안내'}
      src={urlArr}
      id={null}
      category={'INSURANCE_INFO'}
    />
  );
}

export default LongTermCare;
