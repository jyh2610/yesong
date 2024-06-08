import { DropList } from './type';

export const dropList: DropList = {
  센터소개: ['인사말', '오시는길'],
  노인장기요양보험안내: ['노인장기요양보험안내'],
  이용안내: ['방문요양'],
  커뮤니티: ['공지사항', '상담신청'],
  자료실: ['건강정보', '교육자료']
};
export const pathMapping: { [key: string]: string } = {
  인사말: '/center_info/greeting',
  오시는길: '/center_info/way_to_come',
  노인장기요양보험안내: '/long_term_care_info',
  방문요양: '/usage_info/visit_care',
  공지사항: '/community/notice',
  상담신청: '/community/counsel_request',
  건강정보: '/resources/health_info',
  교육자료: '/resources/education_material'
};
