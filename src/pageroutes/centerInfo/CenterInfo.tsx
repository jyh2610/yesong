import { KakaoMap } from '@/entities';
import { companyInfo } from '@/shared';

export function CenterInfo() {
  return (
    <div className="my-1">
      <div className="my-1">
        <div className="flex gap-2 items-center py-1">
          <span className="w-20 rounded-md p-1 bg-blue-800 text-white text-center">
            주소
          </span>
          <p>{companyInfo.address}</p>
        </div>
        <div className="flex gap-2 items-center py-1">
          <span className="w-20 rounded-md p-1 bg-blue-800 text-white text-center">
            연락처
          </span>
          <p>{companyInfo.number}</p>
        </div>
      </div>
      <KakaoMap />
    </div>
  );
}
