import { DropList } from './type';

export const dropList: DropList = {
  센터소개: ['인사말', '오시는길'],
  노인장기요양보험안내: ['노인장기요양보험안내'],
  이용안내: ['방문요양'],
  커뮤니티: ['공지사항', '상담신청'],
  자료실: ['건강정보', '교육자료']
};

export interface IPathMapping {
  path: string;
  children: { [key: string]: string | IPathMapping };
}
export const pathMapping: { [key: string]: IPathMapping } = {
  센터소개: {
    path: '/center_info',
    children: {
      인사말: '/greeting',
      오시는길: '/way_to_come'
    }
  },
  노인장기요양보험안내: {
    path: '/long_term_care',
    children: {
      노인장기요양보험안내: ''
    }
  },
  이용안내: {
    path: '/usage_info',
    children: {
      방문요양: {
        path: '/visit_care/care_info',
        children: {
          '방문요양 서비스 내용 제공': '/visit_care/care_info',
          '월 한도액 및 본인부담금 안내': '/visit_care/price_info'
        }
      }
    }
  },
  커뮤니티: {
    path: '/community',
    children: {
      공지사항: '/notice',
      상담신청: '/counsel_request'
    }
  },
  자료실: {
    path: '/resources',
    children: {
      건강정보: '/health_info',
      교육자료: '/education_material'
    }
  }
};
