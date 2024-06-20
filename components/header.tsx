'use client';

import Image from 'next/image';
import logo from '../public/chzzk-logo.gif';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getCookies, deleteCookies } from '../api/getcookie';
import { log } from 'console';

// eslint-disable-next-line @next/next/no-async-client-component

export default function Page() {
  const router = useRouter();
  let clickFinder = useRef(false);
  const [profileClick, setClickbool] = useState(true);

  const [data, setData] = useState<{ name: string; id: number }>({
    name: '',
    id: 0,
  });
  useEffect(() => {
    async function loginData() {
      const idData = await getCookies();
      console.log(idData);
      if (idData) setData(idData);
    }
    loginData();
  }, []);

  return (
    <div>
      <div className='flex mt-[0.2rem] justify-between mr-4'>
        <button className='mt-0' style={{ zIndex: 4 }}>
          <Link href={'/'}>
            <Image
              className='-ml-10'
              src={logo}
              alt={''}
              width={150}
              height={150}
            />
          </Link>
        </button>

        <div className='w-[25rem] border mt-2 mb-3 p-2 flex items-center h-9 rounded-full focus-within:border-green-500'>
          <input
            className='h-5 w-[100%] bg-[#141517] text-[0.9rem] outline-none'
            type='text'
            // value={inputText}
            placeholder='스트리머, 게임 영상검색'
          ></input>
          <button className='h-5 mb-1'>
            <span
              className='material-symbols-outlined'
              style={{ fontSize: '1.5rem', fontWeight: 'normal' }}
            >
              search
            </span>
          </button>
        </div>

        <div className='flex my-1 items-center'>
          <button className='mr-3 pt-1 hover:bg-slate-700 rounded-md px-1'>
            <span
              className='material-symbols-outlined'
              style={{ fontSize: '1.9rem', fontWeight: 200 }}
            >
              confirmation_number
            </span>
          </button>
          <button className='mr-3 pt-1 hover:bg-slate-700 rounded-md px-1'>
            <span
              className='material-symbols-outlined'
              style={{ fontSize: '1.9rem', fontWeight: 200 }}
            >
              light_mode
            </span>
          </button>
          <div>
            {!data ? (
              <Link href={'/login'}>
                <button className='border border-gray-700 rounded-lg w-20 hover:bg-slate-500'>
                  로그인
                </button>
              </Link>
            ) : (
              <div>
                <Link href={{ pathname: '/profile', query: { id: data.id } }}>
                  <button
                    onClick={() => {
                      //deleteCookies();
                      router.refresh();
                    }}
                  >
                    <Image
                      className={`rounded-full border border-green-900 border-10 hover:border-gray-600 ${
                        profileClick === true ? '' : ''
                      }`}
                      src={'/default_avatar/default_avatar.png'}
                      width={40}
                      height={40}
                      alt=''
                    />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
