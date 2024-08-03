import { Button } from '@nextui-org/react';

export function ShowPDF({ url }: { url: string }) {
  return (
    <div>
      <div className="w-[90%] flex justify-between items-end">
        <span className="text-2xl font-bold pt-3 pb-1 pl-1">미리보기</span>
        <div className="my-4">
          <a href="https://www.longtermcare.or.kr/npbs/e/b/201/npeb201m01.web?menuId=npe0000000080&prevPath=/npbs/e/b/101/npeb101m01.web">
            <Button
              radius="full"
              className="bg-pink-500 text-white text-2xl font-semibold shadow-lg h-14"
            >
              국민건강보험공단 이동하기
            </Button>
          </a>

          {/* <button className="bg-brand-400 hover:bg-blue-500 text-white font-medium text-xl p-4 rounded-md shadow-customGaryShadow"></button> */}
        </div>
      </div>
      <iframe
        className=" border-2"
        style={{
          width: '90%', // 기본 크기로 변경
          height: '1200px',
          border: '2px solid black',
          transform: 'none', // transform 제거
          transformOrigin: '0 0'
        }}
        src={url}
      />
    </div>
  );
}
