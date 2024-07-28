import React from 'react';
import { ShowPDF } from '@/shared';

function LongTermCare() {
  return (
    <div>
      <p className="font-semibold text-5xl">노인장기요양보험제도</p>
      <ShowPDF url="https://longtermcare.or.kr/npbs/e/b/101/npeb101m01.web?menuId=npe0000000030&zoomSize=" />
    </div>
  );
}

export default LongTermCare;
