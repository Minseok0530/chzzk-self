'use client';

import { Inter } from 'next/font/google';
import '/styles/global.css';
import Header from '../components/header';
import { Jua, Do_Hyeon } from 'next/font/google';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

import Login from '../app/(page)/login/page';

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */

const jua = Do_Hyeon({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});
const Menu = dynamic(() => import('../components/menu'), { ssr: false });
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <html lang='kr'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
          rel='stylesheet'
        />
      </head>
      {path === '/login' || path === '/register' ? (
        <body>
          <div className='w-full flex justify-center h-full bg-white'>
            <div className='w-full'>{children}</div>
          </div>
        </body>
      ) : (
        <body className={`${jua.className} bg-[#141517] text-white flex`}>
          <div className='flex w-full'>
            <div className={`fixed flex`} style={{ zIndex: 3 }}>
              <Menu />
            </div>
            <div className='ml-2 flex flex-col w-full h-full '>
              <div
                className='pl-20 fixed w-full bg-[#141517]'
                style={{ zIndex: 2 }}
              >
                <div className='w-full bg-[#141517]'></div>
                <Header />
              </div>
              <div className='w-full pt-16 pl-14 flex' style={{ zIndex: 1 }}>
                <div className='ml-10 mt-5 w-full'>{children}</div>
              </div>

              <div className='border-t border-gray-300 mt-10 mx-auto w-[95%]' />
              <footer className='flex mt-10'>
                <div className='footer_cell__0vJSU'>
                  <a
                    rel='noreferrer'
                    className='footer_text__t475V'
                    href='https://policy.naver.com/rules/service.html'
                    target='_blank'
                  >
                    네이버 이용약관
                  </a>
                  <a
                    rel='noreferrer'
                    className='footer_text__t475V'
                    href='https://game.naver.com/policy'
                    target='_blank'
                  >
                    네이버 게임 커뮤니티 가이드
                  </a>
                  <a
                    rel='noreferrer'
                    className='footer_text__t475V'
                    href='https://policy.naver.com/rules/privacy.html'
                    target='_blank'
                  >
                    <strong>개인정보 처리방침</strong>
                  </a>
                  <a
                    rel='noreferrer'
                    className='footer_text__t475V'
                    href='https://game.naver.com/lounge/chzzk/home'
                    target='_blank'
                  >
                    치지직 라운지
                  </a>
                </div>
                <div className='footer_cell__0vJSU'>
                  <a
                    rel='noreferrer'
                    className='footer_text__t475V'
                    href='https://help.naver.com/alias/contents1/game/game_10.naver'
                    target='_blank'
                  >
                    네이버 게임 고객센터
                  </a>
                  <a
                    rel='noreferrer'
                    className='footer_text__t475V'
                    href='https://www.navercorp.com'
                    target='_blank'
                  >
                    <strong>ⓒ NAVER Corp.</strong>
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </body>
      )}
    </html>
  );
}
