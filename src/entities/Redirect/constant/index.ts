import { PATH } from '@/shared';
import { ListType } from '../types';

export const list: ListType[] = [
  {
    title: '인지활동형프로그램전문 학습지',
    content:
      '기억력 증진과 집중력, 창의력,<br/>신체 및 감각 활동에 도움을 주는 우성인지펜',
    img: '/assets/Logo.png',
    redirect: PATH.HOME
  },
  {
    title: '국민건강보험',
    content:
      '노인장기요양보험에 대한 소개 및<br/>신청절차 등에 대한 안내 사이트',
    img: '/assets/hWell.png',
    redirect: 'https://www.nhis.or.kr/nhis/index.do'
  }
];
