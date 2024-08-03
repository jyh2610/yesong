import { DropList } from './type';

export const dropList: DropList = {
  센터소개: ['인사말', '오시는길'],
  노인장기요양보험: ['노인장기요양보험제도란?', '장기요양인정 및 이용절차'],
  이용안내: ['방문요양'],
  공지사항: ['공지사항'],
  자료실: ['건강정보', '교육자료'],
  갤러리: ['갤러리']
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
  노인장기요양보험: {
    path: '/long_term_care',
    children: {
      '노인장기요양보험제도란?': '/service_explain',
      '장기요양인정 및 이용절차': '/care_steps'
    }
  },
  이용안내: {
    path: '/usage_info',
    children: {
      방문요양: {
        path: '/visit_care',
        children: {
          '방문요양 서비스 내용 제공': '/care_info',
          '월 한도액 및 본인부담금 안내': '/price_info'
        }
      }
    }
  },
  커뮤니티: {
    path: '/community',
    children: {
      공지사항: '/notice'
      // 상담신청: '/counsel_request'
    }
  },
  자료실: {
    path: '/data_lab',
    children: {
      건강정보: '/health_info',
      교육자료: '/education_material'
    }
  },
  갤러리: {
    path: '/gallery',
    children: {
      갤러리: ''
    }
  }
};
