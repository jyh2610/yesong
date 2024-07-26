import { ShowPDF } from '@/shared';

function CareSteps() {
  return (
    <div>
      <p className="font-semibold text-5xl">노인장기요양보험제도</p>
      <ShowPDF url="/assets/useStep.pdf" />
    </div>
  );
}

export default CareSteps;
