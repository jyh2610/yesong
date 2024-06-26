'use client';

import { useGetSearchPost } from '@/entities/DashBoard/api';
import { TitleWithImgLayout } from '@/shared';

function ProvideServiceInfo() {
  const { data: res } = useGetSearchPost({
    search: '방문요양 서비스 제공내용',
    category: 'GUIDE_HOMECARE'
  });
  const id =
    res !== undefined && res.content.length > 0 ? res?.content[0].id : null;
  const urlArr =
    res !== undefined && res.content.length > 0
      ? res.content[0] && res.content[0].files.map(file => file.fileURL)
      : ['/assets/long_term.jpeg', '/assets/long_term3.jpeg'];
  return (
    <TitleWithImgLayout
      id={id}
      title={'방문요양 서비스 제공내용'}
      src={urlArr}
      category="GUIDE_HOMECARE"
    />
  );
}

export default ProvideServiceInfo;
