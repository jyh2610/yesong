'use client';

import { useGetSearchPost } from '@/entities/DashBoard/api';
import { TitleWithImgLayout } from '@/shared';

function PriceInfo() {
  const { data: res } = useGetSearchPost({
    search: '월 한도액 및 본인부담금 안내',
    category: 'GUIDE_HOMECARE'
  });

  const urlArr =
    res !== undefined && res.content.length > 0
      ? res.content[0] && res.content[0].files.map(file => file.fileURL)
      : ['/assets/long_term.jpeg', '/assets/long_term3.jpeg'];

  const id =
    res !== undefined && res.content.length > 0 ? res?.content[0].id : null;
  return (
    <TitleWithImgLayout
      title={'월 한도액 및 본인부담금 안내'}
      src={urlArr}
      id={72}
      category={'GUIDE_HOMECARE'}
      link={[]}
    />
  );
}

export default PriceInfo;
