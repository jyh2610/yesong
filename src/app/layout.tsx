import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
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
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
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
                {children}
                <Footer />
              </NextUiProvider>
            </QueryProvider>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
