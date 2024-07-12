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
export const metadata: Metadata = {
  title: '예송재가 노인복지센터 | 경기도 성남시 수정구',
  icons: {
    icon: '/tabLogo.jpeg'
  },
  description:
    '예송재가 노인복지센터는 경기도 성남시 수정구에 위치한 최고의 노인요양센터입니다. 노인복지서비스, 요양병원, 요양원, 실버타운, 노인 돌봄 서비스를 제공합니다.',
  keywords:
    '노인복지, 요양센터, 노인요양센터, 요양병원, 노인복지시설, 요양원, 실버타운, 노인복지서비스, 노인요양서비스, 노인 돌봄 서비스, 경기도 성남시 수정구'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head>
        <meta
          name="google-site-verification"
          content="eq1o52XaPWMV_0LkJI9A2qgehU2F1u5f0yelKvwLWbc"
        />
      </Head>
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
