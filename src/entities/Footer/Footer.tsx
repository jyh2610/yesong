import { companyInfo } from '@/shared';

export function Footer() {
  return (
    <div className="font-normal text-sm text-newgray py-12 pl-72">
      <p>
        예송재가복지센터 | 대표 : 고도연 | 사업자등록번호 :{' '}
        {companyInfo.businessNumber} | Tel. : {companyInfo.number}
      </p>
      <p>주소 : {companyInfo.address}</p>
      <p>Copyright © 예송재가복지센터. All Rights Reserved.</p>
    </div>
  );
}
