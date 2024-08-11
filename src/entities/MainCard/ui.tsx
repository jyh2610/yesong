import { Card } from './ui/Card';

const cardData = [
  [
    '/assets/image14.png',
    '센터 안내',
    '예송재가 복지센터는 노인성 질환으로 <br />고생하시거나 거동이 불편하신 어르신과  <br />  가족분들을 위한 복지센터입니다.',
    '#fffbfd',
    '#FFB5DF',
    '/sub_page/center_info/greeting'
  ],
  [
    '/assets/image15.png',
    '방문요양',
    '어르신의 가장 편한 생활 공간에서 <br /> 신체, 가사 및 일상, 정서, 인지활동을 지원하여 <br /> 가정에서 안전하고 행복한 일상이 되도록 도와드립니다.',
    '#FFFEF9',
    '#FFEC83',
    '/sub_page/usage_info/visit_care/care_info'
  ],
  [
    '/assets/image16.png',
    '건강 정보',
    '고령화시대에 우리 삶의 새로운 전환점이 되길 바랍니다. <br />대한민국을 보다 건강한 복지국가로 완성하기 위해 <br />  사회와 함께하는 효를 실천하길 바랍니다.',
    '#FFFBF8',
    '#FFC89F',
    '/sub_page/usage_info/visit_care/care_info'
  ]
];

export function MainCard() {
  return (
    <div className="mt-32">
      <div className="w-[100%] px-3 flex justify-between items-center mx-auto gap-1">
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
