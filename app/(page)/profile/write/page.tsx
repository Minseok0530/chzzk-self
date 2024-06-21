'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import supabase from '../../../../api/supabase';
import { Tables } from '../../../../supabase';
import Profile_Home from '../../../../components/profile/home';
import Comunity from '../../../../components/profile/community';
export default function Home(props: { searchParams: { id: string } }) {
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
            <h2 className='text-xl font-semibold'>글쓰기</h2>
            <div className='flex space-x-4 mt-4'></div>
          </div>
          <div className='bg-gray-700 rounded-lg p-4 mb-4'>
            <textarea
              className='w-full bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none resize-none'
              rows={6}
              placeholder='어떤 이야기를 남길건가요?'
            ></textarea>
          </div>
          <div className='flex justify-between items-center'>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500'>
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
