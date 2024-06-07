import Image from 'next/image';
// import jwt from 'jsonwebtoken';
// import { useState } from 'react';
// import supabase from '../../../api/supabase';

export default function Page() {
  return (
    <div
      className='flex w-[100%] justify-center flex-col items-center'
      style={{
        fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 10",
      }}
    >
      <Image
        src={'/Logo/naver_logo.png'}
        width={240}
        height={0}
        alt=''
        className='-mb-[52px]'
      />
      <div className='w-[458px] border-[#C6C6C6] border flex flex-col items-center h-[310px] rounded-md'>
        <div className='w-full flex h-[61px] border-b-white'>
          <button className='border-[#C6C6C6] w-[152.328px] rounded-t-md flex border-b-white justify-center items-center'>
            <span
              className='material-symbols-outlined mr-2'
              style={{ fontSize: '18px' }}
            >
              login
            </span>
            ID 로그인
          </button>
          <button className='border-r border-b border-l rounded-bl-md border-[#C6C6C6] w-[152.328px] flex justify-center items-center'>
            <span
              className='material-symbols-outlined flex'
              style={{ fontSize: '18px' }}
            >
              looks_one
            </span>
            일회용 번호
          </button>
          <button className='border-[#C6C6C6] w-[152.328px] rounded-tr-md flex border-b justify-center items-center'>
            <span
              className='material-symbols-outlined'
              style={{ fontSize: '18px' }}
            >
              qr_code
            </span>
            QR 로그인
          </button>
        </div>
        <div className='flex flex-col mt-5'>
          <div className='border w-[410px] h-[45px] rounded-t-md flex items-center pl-[17px]'>
            <span className='material-symbols-outlined'>person</span>
            <input className='w-full' placeholder='아이디' />
          </div>

          <div className='border w-[410px] h-[45px] rounded-b-md flex items-center pl-[17px]'>
            <span className='material-symbols-outlined'>lock</span>
            <input className='w-full' placeholder='비밀번호' />
          </div>
        </div>
        <div className='justify-between flex w-[410px] mt-[13px]'>
          <button className='flex items-center'>
            <span
              className='material-symbols-outlined'
              style={{ fontSize: '18px' }}
            >
              check_circle
            </span>
            로그인 상태유지
          </button>
          <button>IP보안</button>
        </div>
        <button className='w-[410px] h-[52px] mt-[38px] rounded-md bg-[#09AA5C] text-white mb-5'>
          로그인
        </button>
      </div>
      <div className='mt-[20px] mb-[35px]'>
        비밀번호 찾기 | 아이디 찾기 | <a href='/register'>회원가입</a>
      </div>
      <Image src='/AD/naver_ad.jpg' width={460} height={100} alt='' />

      <div className='flex flex-col items-center mt-20'>
        <ul className='flex' id='footer_link'>
          <li>
            <a
              target='_blank'
              className='footer_item'
              href='http://www.naver.com/rules/service.html'
              id='fot.agreement'
            >
              <span className='text'>이용약관 | </span>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              className='footer_item'
              href='http://www.naver.com/rules/privacy.html'
              id='fot.privacy'
            >
              <span className='text'>
                <strong>개인정보처리방침 </strong>|
              </span>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              className='footer_item'
              href='http://www.naver.com/rules/disclaimer.html'
              id='fot.disclaimer'
            >
              <span className='text'>책임의 한계와 법적고지 |</span>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              className='footer_item'
              href='https://help.naver.com/alias/membership/p.membership/main.naver'
              id='fot.help'
            >
              <span className='text'>회원정보 고객센터</span>
            </a>
          </li>
        </ul>
        <div className='flex'>
          <a id='fot.naver' target='_blank' href='https://www.navercorp.com'>
            <span className='footer_logo'>
              <span className='blind'>네이버</span>
            </span>
          </a>
          <span className='text'>Copyright</span>
          <span className='corp'>© NAVER Corp.</span>
          <span className='text'>All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}
