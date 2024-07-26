import React from 'react';
import { ShowPDF } from '@/shared';

function LongTermCare() {
  return (
    <div>
      <p className="font-semibold text-5xl">인정절차</p>
      <ShowPDF url="/assets/longTermPDF.pdf" />
    </div>
  );
}

export default LongTermCare;
