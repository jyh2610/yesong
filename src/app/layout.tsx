import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Head from 'next/head';
import Script from 'next/script';
import { Footer, Header } from '@/entities';
import { NextUiProvider, QueryProvider } from './_providers';
import AuthProvider from './_providers/AuthProvider';
import ToastProvider from './_providers/ToastProvider';

const pretendard = localFont({
  src: '../../public/assets/font/PretendardVariable.ttf',
  weight: '45 920',
  variable: '--font-pretendard'
});

export const metadata = {
  title: '예송재가 노인복지센터 | 경기도 성남시 수정구',
  icons: {
    icon: '/tabLogo.jpeg'
  },
  openGraph: {
    type: 'website',
    url: 'https://ye-song.co.kr',
    title: '예송재가 노인복지센터 | 경기도 성남시 수정구',
    description:
      '예송재가 노인복지센터는 경기도 성남시 수정구에 위치한 최고의 노인요양센터입니다. 노인복지서비스, 요양병원, 요양원, 실버타운, 노인 돌봄 서비스를 제공합니다.',
    images: [
      {
        url: '/tabLogo.jpeg',
        width: 800,
        height: 600,
        alt: '예송재가 노인복지센터'
      }
    ]
  },
  robots: 'index, follow',
  description:
    '예송재가 노인복지센터는 경기도 성남시 수정구에 위치한 최고의 노인요양센터입니다. 노인복지서비스, 요양병원, 요양원, 실버타운, 노인 돌봄 서비스를 제공합니다.',
  keywords:
    '노인복지, 요양센터, 노인요양센터, 요양병원, 노인복지시설, 요양원, 실버타운, 노인복지서비스, 노인요양서비스, 노인 돌봄 서비스, 경기도 성남시 수정구, 고도연, 예송, 재가, 노인, 복지센터, 성남시 국민건강보험, 성남시 최우수등급, 장기요양기관, 인정신청, 등급신청, 재가급여, 노인장기요양, 방문요양, 방문상담, 치매, 실버, 고령화, 부모님, 전문적 케어, 케어, 말벗, 신체활동 지원, 정서지원, 일상생활 지원, 개인활동 지원, 가정방문, 재가노인, 노인보건, 노인상담, 노노케어, 노후생활, 65세 이상, 노인성질환, 낙상, 욕창, 건강증진, 외출도움, 병원동행, 인지 장애, 노인복지, 독거노인, 어르신, 돌봄, 간병, 입주, 성남시 요양보호사, 수정구 방문요양, 신흥동 방문요양, 단대오거리 방문요양'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <meta
        name="naver-site-verification"
        content="286b1d4aa16d8e408601495fc52c4ae6668d0575"
      />
      <Script
        type="text/javascript"
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`}
        defer
      />
      <body className={`w-full ${pretendard.variable} font-pretendard `}>
        <ToastProvider>
          <AuthProvider>
            <QueryProvider>
              <NextUiProvider>
                <Header />
                <main>{children}</main>
                <Footer />
              </NextUiProvider>
            </QueryProvider>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
