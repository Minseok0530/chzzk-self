import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '/styles/global.css';
import Header from '../components/header';

import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
const Menu = dynamic(() => import('../components/menu'), { ssr: false });
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#141517] text-white flex">
        <Menu />
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="w-full">{children}</div>
          <div className="border-t border-gray-300 mt-10 mx-auto w-[95%]" />
          <footer className="flex mt-10">
            <div className="footer_cell__0vJSU">
              <a
                rel="noreferrer"
                className="footer_text__t475V"
                href="https://policy.naver.com/rules/service.html"
                target="_blank"
              >
                네이버 이용약관
              </a>
              <a
                rel="noreferrer"
                className="footer_text__t475V"
                href="https://game.naver.com/policy"
                target="_blank"
              >
                네이버 게임 커뮤니티 가이드
              </a>
              <a
                rel="noreferrer"
                className="footer_text__t475V"
                href="https://policy.naver.com/rules/privacy.html"
                target="_blank"
              >
                <strong>개인정보 처리방침</strong>
              </a>
              <a
                rel="noreferrer"
                className="footer_text__t475V"
                href="https://game.naver.com/lounge/chzzk/home"
                target="_blank"
              >
                치지직 라운지
              </a>
            </div>
            <div className="footer_cell__0vJSU">
              <a
                rel="noreferrer"
                className="footer_text__t475V"
                href="https://help.naver.com/alias/contents1/game/game_10.naver"
                target="_blank"
              >
                네이버 게임 고객센터
              </a>
              <a
                rel="noreferrer"
                className="footer_text__t475V"
                href="https://www.navercorp.com"
                target="_blank"
              >
                <strong>ⓒ NAVER Corp.</strong>
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
