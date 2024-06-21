'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import supabase from '../../../../api/supabase';
import { Tables } from '../../../../supabase';
import Profile_Home from '../../../../components/profile/home';
import Comunity from '../../../../components/profile/community';
export default function Home(props: {
  searchParams: { id: string; content_id: string };
}) {
  console.log();
  const id = props.searchParams.id;
  const [userName, setUserName] = useState<string | null>('');
  const [state, setState] = useState(0);
  const array = [<Profile_Home key={0} />, <Comunity postData={id} key={1} />];
  useEffect(() => {
    async function dataSet() {
      const { data } = await supabase
        .from('user_table')
        .select('*')
        .eq('id', id)
        .returns<Tables<'user_table'>[]>();

      console.log('data', data);
      const findData = data?.find((o) => {
        console.log(o.id, id);
        if (o.id === Number(id)) return o;
      });
      console.log(data?.[0].user_name);
      console.log(findData);
      if (findData) {
        console.log(findData.user_name);
        setUserName(findData.user_name);
      }
    }
    dataSet();
  }, [id]);

  return (
    <div className='flex justify-center flex-col'>
      <div className='flex flex-col'>
        <div className='flex'>
          <Image
            src={'/default_avatar/default_avatar.png'}
            width={100}
            height={100}
            alt=''
            className='rounded-full'
          />
          <div>{userName}</div>
        </div>

        <div className='border-b-[0.01rem] w-[98%]'>
          <button
            className='bg-gray-700 mr-2'
            onClick={() => {
              setState(0);
            }}
          >
            홈
          </button>
          <button
            className='bg-gray-700 mr-2'
            onClick={() => {
              setState(1);
            }}
          >
            동영상
          </button>
          <button
            className='bg-gray-700 mr-2'
            onClick={() => {
              setState(2);
            }}
          >
            커뮤니티
          </button>
          <button
            className='bg-gray-700 mr-2'
            onClick={() => {
              setState(3);
            }}
          >
            정보
          </button>
        </div>
        <div className='max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg'>
          <div className='mb-4'>
            <div className='flex items-center mb-2'>
              <div className='w-10 h-10 bg-gray-700 rounded-full mr-3'></div>
              <div>
                <h2 className='font-bold'>
                  loserOne <span className='text-red-500 text-sm'>N</span>
                </h2>
                <span className='text-sm text-gray-500'>4시간 전</span>
              </div>
            </div>
            <p className='mb-2'>TEST1</p>
            <div className='flex justify-between items-center'>
              <div></div>
              <div className='flex items-center space-x-2'>
                <button className='text-gray-500 hover:text-gray-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M5 15l7-7 7 7'
                    />
                  </svg>
                </button>
                <span className='text-sm'>0</span>
              </div>
            </div>
          </div>
          <div className='border-t border-gray-700 pt-4'>
            <h3 className='text-lg font-semibold mb-4'>댓글 1</h3>
            <div className='flex items-center mb-4'>
              <input
                type='text'
                className='flex-grow bg-gray-700 text-gray-300 p-2 rounded-lg placeholder-gray-500 focus:outline-none'
                placeholder='댓글을 입력하세요'
              />
            </div>
            <div className='mb-4'>
              <p className='text-sm text-gray-500'>
                클린봇이 악성댓글을 감지합니다.
              </p>
            </div>
            <div className='flex items-start mb-4'>
              <div className='w-8 h-8 bg-gray-700 rounded-full mr-3'></div>
              <div>
                <div className='flex items-center'>
                  <span className='font-bold'>loserOne</span>
                  <span className='text-sm text-gray-500 ml-2'>4시간 전</span>
                </div>
                <p>TEST2</p>
                <button className='text-gray-500 text-sm mt-1'>
                  답글 쓰기
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-gray-500'>
                등록순 · 인기순 · 최신순
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
