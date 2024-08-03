import { ShowPDF } from '@/shared';

function CareSteps() {
  return (
    <div>
      <p className="font-semibold text-5xl">장기요양인정 및 이용절차</p>
      <ShowPDF url="https://longtermcare.or.kr/npbs/e/b/201/npeb201m01.web?menuId=npe0000000080&prevPath=/npbs/e/b/101/npeb101m01.web" />
    </div>
  );
}

export default CareSteps;
