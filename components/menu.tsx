'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Menu() {
  const router = useRouter();
  return (
    <div className='flex flex-col w-14 mr-4 mt-[0.4rem] ml-3'>
      <div className='flex flex-col mt-1'>
        <button className='flex items-center justify-center'>
          <svg
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='header_icon__8SHkt'
          >
            <g clip-path='url(#clip0_1128_3162)'>
              <rect
                x='11'
                y='13'
                width='18'
                height='2'
                rx='1'
                fill='currentColor'
              ></rect>
              <rect
                x='11'
                y='19'
                width='18'
                height='2'
                rx='1'
                fill='currentColor'
              ></rect>
              <rect
                x='11'
                y='25'
                width='18'
                height='2'
                rx='1'
                fill='currentColor'
              ></rect>
            </g>
            <defs>
              <clipPath id='clip0_1128_3162'>
                <rect width='40' height='40' rx='6' fill='white'></rect>
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          className='-black  mt-6 items-center justify-center flex flex-col '
          onClick={() => {
            router.push('/all-live');
          }}
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
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M23.611 7.11908C23.8044 7.26028 23.9188 7.48537 23.9188 7.72486V17.9768C23.9188 18.2163 23.8044 18.4413 23.611 18.5826C23.4176 18.7238 23.1683 18.7641 22.9402 18.6911L18.5714 17.2931C18.2608 17.1937 18.05 16.9049 18.05 16.5788V9.12285C18.05 8.79669 18.2608 8.50793 18.5714 8.40853L22.9402 7.01054C23.1683 6.93755 23.4176 6.97788 23.611 7.11908ZM19.55 9.67032V16.0313L22.4188 16.9493V8.75232L19.55 9.67032Z'
              fill='#9da5b6'
            ></path>
            <path
              d='M9.9909 10.7164L13.5364 12.7634L9.9909 14.8103V10.7164ZM9.81362 14.9127C9.81369 14.9126 9.81376 14.9126 9.81384 14.9125L9.81362 14.9127Z'
              fill='#9da5b6'
              stroke='#9da5b6'
              stroke-width='1.18182'
            ></path>
            <rect
              x='3.65'
              y='4.88635'
              width='15.0455'
              height='15.8727'
              rx='3.97727'
              stroke='#9da5b6'
              stroke-width='1.5'
            ></rect>
          </svg>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.6rem' }}>
            전체<p>라이브</p>
          </div>
        </button>
        <button
          className='-black  mt-6 items-center justify-center flex flex-col'
          onClick={() => {
            router.push('/review');
          }}
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
              d='M6.34333 17.8745C6.09832 17.5405 5.62895 17.4684 5.29497 17.7134C4.961 17.9584 4.88888 18.4278 5.13389 18.7618L6.34333 17.8745ZM21.25 13C21.25 17.5563 17.5564 21.25 13 21.25V22.75C18.3848 22.75 22.75 18.3848 22.75 13H21.25ZM13 4.75C17.5564 4.75 21.25 8.44365 21.25 13H22.75C22.75 7.61522 18.3848 3.25 13 3.25V4.75ZM13 21.25C10.2679 21.25 7.84594 19.9227 6.34333 17.8745L5.13389 18.7618C6.90691 21.1786 9.77001 22.75 13 22.75V21.25ZM5.67064 9.20878C7.04465 6.55834 9.81179 4.75 13 4.75V3.25C9.22979 3.25 5.96066 5.39017 4.33895 8.51842L5.67064 9.20878Z'
              fill='#9da5b6'
            ></path>
            <path
              d='M4.37274 5.31824V8.86369H7.9182'
              stroke='#9da5b6'
              stroke-width='1.5'
              stroke-miterlimit='10'
              stroke-linecap='round'
            ></path>
            <path
              d='M15.8364 12.354C16.1515 12.5359 16.1515 12.9908 15.8363 13.1727L11.9363 15.4244C11.6212 15.6064 11.2273 15.3789 11.2273 15.015V10.5117C11.2273 10.1478 11.6212 9.92034 11.9363 10.1023L15.8364 12.354Z'
              fill='#9da5b6'
            ></path>
          </svg>
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
          <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='header_icon__8SHkt'
          >
            <rect
              x='5.04996'
              y='4.88635'
              width='6.5'
              height='6.5'
              rx='1.25'
              stroke='#9da5b6'
              stroke-width='1.5'
            ></rect>
            <rect
              x='14.8818'
              y='4.83635'
              width='6.6'
              height='6.6'
              rx='1.3'
              stroke='#9da5b6'
              stroke-width='1.4'
            ></rect>
            <rect
              x='14.9318'
              y='14.834'
              width='6.5'
              height='6.5'
              rx='1.25'
              stroke='#9da5b6'
              stroke-width='1.5'
            ></rect>
            <rect
              x='5.04996'
              y='14.834'
              width='6.5'
              height='6.5'
              rx='1.25'
              stroke='#9da5b6'
              stroke-width='1.5'
            ></rect>
          </svg>
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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='26'
            fill='none'
            className='header_icon__8SHkt'
          >
            <path
              stroke='#9da5b6'
              stroke-linejoin='round'
              stroke-width='1.5'
              d='M13.027 7.725C11.536 3.835 4 4.413 4 10.295c0 2.764 2.041 6.39 7.898 10.126.133.085.585.327 1.102.329.517.002.94-.226 1.055-.3C19.948 16.704 22 13.067 22 10.296c0-5.848-7.473-6.483-8.973-2.57Z'
            ></path>
          </svg>
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
        <Link href={'https://game.naver.com/'}>
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
              stroke-width='1.5'
            ></rect>
            <rect
              x='4.74997'
              y='14.2501'
              width='7.1'
              height='7.1'
              rx='3.55'
              stroke='#9da5b6'
              stroke-width='1.5'
            ></rect>
            <path
              d='M21.4169 10.9503H14.983C14.7933 10.9503 14.6727 10.7474 14.7634 10.5808L17.9804 4.67212C18.0751 4.49818 18.3248 4.49818 18.4195 4.67212L19.0782 4.31349L18.4195 4.67212L21.6365 10.5808C21.7272 10.7474 21.6066 10.9503 21.4169 10.9503Z'
              stroke='#9da5b6'
              stroke-width='1.5'
            ></path>
            <path
              d='M15.3999 14.8004L21.3994 20.8004'
              stroke='#9da5b6'
              stroke-width='1.5'
              stroke-linecap='round'
            ></path>
            <path
              d='M21.3997 14.8003L15.4002 20.8002'
              stroke='#9da5b6'
              stroke-width='1.5'
              stroke-linecap='round'
            ></path>
          </svg>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.75rem' }}>
            게임
          </div>
        </Link>
      </div>

      <div className='flex flex-col items-center mt-5'>
        <Link
          href={'https://game.naver.com/esports/League_of_Legends/home'}
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
            <g clip-path='url(#clip0_9131_73407)'>
              <path
                d='M1.93173 10.0456C1.93173 8.72498 2.32016 7.94092 2.93169 7.45813C3.57996 6.94634 4.6187 6.65924 6.14537 6.65924H7.52264V13.432H6.14537C4.86785 13.432 3.81726 13.279 3.09515 12.8131C2.44483 12.3936 1.93173 11.6316 1.93173 10.0456Z'
                stroke='#9da5b6'
                stroke-width='1.5'
              ></path>
            </g>
            <g clip-path='url(#clip1_9131_73407)'>
              <path
                d='M24.0681 10.0453C24.0681 11.366 23.6797 12.15 23.0682 12.6328C22.4199 13.1446 21.3812 13.4317 19.8545 13.4317L18.4772 13.4317L18.4772 6.65897L19.8545 6.65897C21.132 6.65897 22.1826 6.81195 22.9047 7.27783C23.555 7.69739 24.0681 8.45932 24.0681 10.0453Z'
                stroke='#9da5b6'
                stroke-width='1.5'
              ></path>
            </g>
            <path
              d='M10.0454 22.2857H15.9545'
              stroke='#9da5b6'
              stroke-width='1.5'
              stroke-linecap='round'
            ></path>
            <path
              d='M18.6647 5.15915H7.33526C6.55298 5.15915 5.91882 5.79331 5.91882 6.57559V12.2403C5.91882 16.1511 9.08917 19.3215 13 19.3215C16.9108 19.3215 20.0812 16.1511 20.0812 12.2403V6.57559C20.0812 5.79331 19.447 5.15915 18.6647 5.15915Z'
              stroke='#9da5b6'
              stroke-width='1.5'
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
        </Link>
      </div>

      <div className='flex flex-col items-center mt-5'>
        <Link
          href={'https://game.naver.com/original_series'}
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
              stroke-width='1.5'
            ></circle>
            <path
              d='M8.89454 12.0289L10.117 15.1725C10.1469 15.2494 10.221 15.3 10.3034 15.3H15.6965C15.779 15.3 15.853 15.2494 15.8829 15.1725L17.1054 12.0289C17.1431 11.932 17.0261 11.849 16.9471 11.9167L15.125 13.4786L13.0839 10.3295C13.0445 10.2687 12.9555 10.2687 12.9161 10.3295L10.875 13.4786L9.05282 11.9167C8.97383 11.849 8.85684 11.932 8.89454 12.0289Z'
              fill='#9da5b6'
              stroke='#9da5b6'
              stroke-linecap='round'
            ></path>
          </svg>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.75rem' }}>
            오리지날
          </div>
        </Link>
      </div>

      <div className='flex flex-col items-center mt-5'>
        <Link
          href={'https://game.naver.com/pcgame'}
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
              stroke-width='1.5'
              stroke-linejoin='round'
            ></path>
            <path
              d='M9 19.9998H17'
              stroke='#9da5b6'
              stroke-width='1.5'
              stroke-linecap='round'
            ></path>
          </svg>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.75rem' }}>
            PC 게임
          </div>
        </Link>
      </div>

      <div className='flex flex-col items-center mt-5'>
        <Link
          href={'https://game.naver.com/lounge/chzzk/home'}
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
              stroke-width='1.5'
              stroke-linejoin='round'
            ></rect>
          </svg>
          <div className='text-[#9da5b6]' style={{ fontSize: '0.75rem' }}>
            치지직<p>라운지</p>
          </div>
        </Link>
      </div>

      <div></div>
    </div>
  );
}
