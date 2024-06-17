'use client';

import Image from 'next/image';
import { Abel } from 'next/font/google';
import { getCookies } from '../../../api/getcookie';
import { useEffect, useState } from 'react';

const font = Abel({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Page() {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    let loginUser = '';
    async function getLoginInfo() {
      const loginData = await getCookies();
      loginUser = loginData.id;
      // console.log(loginData);
      setUserId(loginUser);
    }
    getLoginInfo();
  }, []);

  useEffect(() => {}, []);
  return (
    <div>
      {userId === '' ? (
        <>
          <div className='text-[1.65rem]'>팔로잉</div>
          <div className='flex justify-center items-center flex-col mt-32'>
            <Image
              src={'/AD/follow_no_login.png'}
              alt=''
              width={150}
              height={150}
            />
            <div className={font.className}>
              로그인하고 팔로잉 목록을 확인해보세요
            </div>
            <button
              className={
                'bg-[rgba(0,255,163,.9)] p-3 w-28 text-black rounded-lg font-bold'
              }
            >
              로그인
            </button>
          </div>
        </>
      ) : (
        <>
          {' '}
          <div>
            <div className='text-[1.7rem]'>팔로잉</div>
            <div className='flex mt-7'>
              <button className='flex bg-[#2E3033] rounded-2xl h-7 mr-2 items-center px-3 py-2'>
                전체
              </button>
              <button className='flex bg-[#2E3033] rounded-2xl h-7 px-3 py-2 items-center'>
                라이브
              </button>
              <button className='flex bg-[#2E3033] rounded-2xl h-7 px-3 py-2 items-center'>
                채널
              </button>
              <button className='flex bg-[#2E3033] rounded-2xl h-7 px-3 py-2 items-center'>
                카테고리
              </button>
            </div>
            <div>{/*영상이 들어갈 곳*/}</div>
          </div>
        </>
      )}
    </div>
  );
}
