export function ShowPDF({ url }: { url: string }) {
  return (
    <div>
      <div className="my-4">
        <a
          className="hover:text-blue-500"
          href="https://www.longtermcare.or.kr/npbs/e/b/201/npeb201m01.web?menuId=npe0000000080&prevPath=/npbs/e/b/101/npeb101m01.web"
        >
          국민겅강보험공단 이동하기
        </a>
      </div>
      <iframe
        className=" border-2"
        style={{
          width: '120%',
          height: '1200px',
          border: '2px solid black',
          transform: 'scale(0.8)',
          transformOrigin: '0 0'
        }}
        src={url}
      />
    </div>
  );
}
