import { FullImage } from '@/shared';

const cardData = [
  [
    '/assets/image14.png',
    '센터 안내',
    '예송재가 복지센터는 노인성 질환으로 고생하시거나 거동이 불편하신 어르신과 가족분들을 위한 복지센터입니다.',
    '#fffbfd' // 색상 클래스로 변경
  ],
  [
    '/assets/image15.png',
    '방문요양/ 방문목욕',
    '어르신의 가장 편한 생활 공간에서 신체, 가사 및 일상, 정서, 인지활동을 지원하여 가정에서 안전하고 행복한 일상을 지내시도록 도와드립니다.',
    '#FFFEF9' // 색상 클래스로 변경
  ],
  [
    '/assets/image16.png',
    '건강 정보',
    '고령화시대에 우리 삶의 새로운 전환점이 되길 바랍니다. 대한민국을 보다 건강한 복지국가로 완성하기 위해 사회와 함께하는 효를 실천하길 바랍니다.',
    '#FFFBF8' // 색상 클래스로 변경
  ]
];

export function MainCard() {
  return (
    <div className="mt-32">
      <div className="flex justify-between mx-auto gap-5 ">
        {cardData.map(card => (
          <div
            key={card[1]}
            style={{
              backgroundColor: card[3]
            }}
            className={`flex flex-col justify-center items-center gap-5 rounded-3xl px-7 py-8`}
          >
            <div className="w-32 h-32 relative">
              <FullImage src={card[0]} altContent={'카드 이미지'} />
            </div>
            <div className="text-center">
              <p className="mb-4 font-normal text-2xl">{card[1]}</p>
              <div className="text-lg leading-[25px]">{card[2]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
