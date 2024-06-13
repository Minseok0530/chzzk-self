'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Menu(props: { menuToggle: boolean }) {
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);
  return (
    <div
      className={`flex flex-col ${
        props.menuToggle ? `w-52` : `w-10`
      } mr-5 ml-5 mt-10 `}
    >
      <div className='flex flex-col'>
        <button
          className={`-black items-center justify-center flex ${
            props.menuToggle ? '' : `flex-col`
          }`}
          onClick={() => {
            router.push('/all-live');
          }}
        >
          <span className='material-symbols-outlined'>videocam</span>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.6rem' }}>
            전체<p>라이브</p>
          </div>
        </button>
        <button
          className='-black mt-6 items-center justify-center flex flex-col'
          onClick={() => {
            router.push('/review');
          }}
        >
          <span className='material-symbols-outlined'>replay</span>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.6rem' }}>
            다시보기
          </div>
        </button>
        <button
          className='-black  mt-6 items-center justify-center flex flex-col'
          onClick={() => {
            router.push('/category');
          }}
        >
          <span className='material-symbols-outlined'>grid_view</span>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.6rem' }}>
            카테고리
          </div>
        </button>
        <button
          className='-black  mt-6 items-center justify-center flex flex-col'
          onClick={() => {
            router.push('/following');
          }}
        >
          <span className='material-symbols-outlined'>favorite</span>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.6rem' }}>
            팔로잉
          </div>
        </button>
      </div>
      <div className='divide-x divide-solid border-gray-50 border'></div>
      <div className='text-[#9da5b6]' style={{ fontSize: '0.9rem' }}>
        추천
      </div>
      <div className='text-[#9da5b6]' style={{ fontSize: '0.9rem' }}>
        파트너
      </div>
      <div className='divide-x divide-solid border-gray-50 border'></div>
      <div></div>
      <div className='flex flex-col items-center mt-5'>
        <button
          onClick={() => {
            router.push('https://game.naver.com/');
          }}
        >
          <svg
            //첫번쨰
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='header_icon__8SHkt'
          >
            <rect
              x='5.04996'
              y='4.51138'
              width='6.5'
              height='6.5'
              rx='1.25'
              stroke='#9da5b6'
              strokeWidth='1.5'
            ></rect>
            <rect
              x='4.74997'
              y='14.2501'
              width='7.1'
              height='7.1'
              rx='3.55'
              stroke='#9da5b6'
              strokeWidth='1.5'
            ></rect>
            <path
              d='M21.4169 10.9503H14.983C14.7933 10.9503 14.6727 10.7474 14.7634 10.5808L17.9804 4.67212C18.0751 4.49818 18.3248 4.49818 18.4195 4.67212L19.0782 4.31349L18.4195 4.67212L21.6365 10.5808C21.7272 10.7474 21.6066 10.9503 21.4169 10.9503Z'
              stroke='#9da5b6'
              strokeWidth='1.5'
            ></path>
            <path
              d='M15.3999 14.8004L21.3994 20.8004'
              stroke='#9da5b6'
              strokeWidth='1.5'
              strokeLinecap='round'
            ></path>
            <path
              d='M21.3997 14.8003L15.4002 20.8002'
              stroke='#9da5b6'
              strokeWidth='1.5'
              strokeLinecap='round'
            ></path>
          </svg>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.75rem' }}>
            게임
          </div>
        </button>
      </div>

      <div className='flex flex-col items-center mt-5'>
        <button
          onClick={() => {
            router.push(
              'https://game.naver.com/esports/League_of_Legends/home',
            );
          }}
          className='flex flex-col items-center'
        >
          <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='header_icon__8SHkt'
          >
            <g clipPath='url(#clip0_9131_73407)'>
              <path
                d='M1.93173 10.0456C1.93173 8.72498 2.32016 7.94092 2.93169 7.45813C3.57996 6.94634 4.6187 6.65924 6.14537 6.65924H7.52264V13.432H6.14537C4.86785 13.432 3.81726 13.279 3.09515 12.8131C2.44483 12.3936 1.93173 11.6316 1.93173 10.0456Z'
                stroke='#9da5b6'
                strokeWidth='1.5'
              ></path>
            </g>
            <g clipPath='url(#clip1_9131_73407)'>
              <path
                d='M24.0681 10.0453C24.0681 11.366 23.6797 12.15 23.0682 12.6328C22.4199 13.1446 21.3812 13.4317 19.8545 13.4317L18.4772 13.4317L18.4772 6.65897L19.8545 6.65897C21.132 6.65897 22.1826 6.81195 22.9047 7.27783C23.555 7.69739 24.0681 8.45932 24.0681 10.0453Z'
                stroke='#9da5b6'
                strokeWidth='1.5'
              ></path>
            </g>
            <path
              d='M10.0454 22.2857H15.9545'
              stroke='#9da5b6'
              strokeWidth='1.5'
              strokeLinecap='round'
            ></path>
            <path
              d='M18.6647 5.15915H7.33526C6.55298 5.15915 5.91882 5.79331 5.91882 6.57559V12.2403C5.91882 16.1511 9.08917 19.3215 13 19.3215C16.9108 19.3215 20.0812 16.1511 20.0812 12.2403V6.57559C20.0812 5.79331 19.447 5.15915 18.6647 5.15915Z'
              stroke='#9da5b6'
              strokeWidth='1.5'
            ></path>
            <defs>
              <clipPath id='clip0_9131_73407'>
                <rect
                  width='4.72727'
                  height='8.27273'
                  fill='white'
                  transform='translate(1.18173 5.90924)'
                ></rect>
              </clipPath>
              <clipPath id='clip1_9131_73407'>
                <rect
                  width='4.72727'
                  height='8.27273'
                  fill='white'
                  transform='translate(20.0909 5.90909)'
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.75rem' }}>
            E스포츠
          </div>
        </button>
      </div>

      <div className='flex flex-col items-center mt-5'>
        <button
          onClick={() => {
            router.push('https://game.naver.com/original_series');
          }}
          className='flex flex-col items-center'
        >
          <svg
            //세번째
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='header_icon__8SHkt'
          >
            <circle
              cx='13'
              cy='13'
              r='9'
              stroke='#9da5b6'
              strokeWidth='1.5'
            ></circle>
            <path
              d='M8.89454 12.0289L10.117 15.1725C10.1469 15.2494 10.221 15.3 10.3034 15.3H15.6965C15.779 15.3 15.853 15.2494 15.8829 15.1725L17.1054 12.0289C17.1431 11.932 17.0261 11.849 16.9471 11.9167L15.125 13.4786L13.0839 10.3295C13.0445 10.2687 12.9555 10.2687 12.9161 10.3295L10.875 13.4786L9.05282 11.9167C8.97383 11.849 8.85684 11.932 8.89454 12.0289Z'
              fill='#9da5b6'
              stroke='#9da5b6'
              strokeLinecap='round'
            ></path>
          </svg>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.75rem' }}>
            오리지날
          </div>
        </button>
      </div>

      <div className='flex flex-col items-center mt-5'>
        <button
          onClick={() => {
            router.push('https://game.naver.com/pcgame');
          }}
          className='flex flex-col items-center'
        >
          <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='header_icon__8SHkt'
          >
            <path
              d='M6.54501 4.29541H18.545C19.7877 4.29541 20.795 5.30277 20.795 6.54541V13.5454C20.795 14.7881 19.7877 15.7954 18.545 15.7954H6.54501C5.30237 15.7954 4.29501 14.788 4.29501 13.5454V6.54541C4.29501 5.30277 5.30237 4.29541 6.54501 4.29541Z'
              stroke='#9da5b6'
              strokeWidth='1.5'
              strokeLinejoin='round'
            ></path>
            <path
              d='M9 19.9998H17'
              stroke='#9da5b6'
              strokeWidth='1.5'
              strokeLinecap='round'
            ></path>
          </svg>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.75rem' }}>
            PC 게임
          </div>
        </button>
      </div>

      <div className='flex flex-col items-center mt-5'>
        <button
          onClick={() => {
            'https://game.naver.com/lounge/chzzk/home';
          }}
          className='flex flex-col items-center'
        >
          <svg
            //다섯번 째
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='header_icon__8SHkt'
          >
            <path
              d='M16.2562 16.5455V14.7001H13.3917L16.5455 10.488H13.9899L14.7638 9.45456H12.2082L10.0961 12.2755H12.6517L9.45456 16.5455H16.2562Z'
              fill='#9da5b6'
            ></path>
            <rect
              x='4.29544'
              y='4.29529'
              width='17.4091'
              height='17.4091'
              rx='8.70455'
              stroke='#9da5b6'
              strokeWidth='1.5'
              strokeLinejoin='round'
            ></rect>
          </svg>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.75rem' }}>
            치지직<p>라운지</p>
          </div>
        </button>
      </div>

      <div></div>
    </div>
  );
}
