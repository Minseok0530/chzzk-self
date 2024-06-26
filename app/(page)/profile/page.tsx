'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import supabase from '../../../api/supabase';
import { Tables } from '../../../supabase';
import Profile_Home from '../../../components/profile/home';
import Comunity from '../../../components/profile/community';
import { getCookies } from '../../../api/getcookie';
import { cookies } from 'next/headers';
export default function Home(props: { searchParams: { id: string } }) {
  const id = props.searchParams.id;
  const [userName, setUserName] = useState<string | null>('');
  const [state, setState] = useState(0);
  const [mine, isMine] = useState(false);
  const [follow, setFollow] = useState(false);
  const [userData, setUserData] = useState<number>(0);
  const commu = '0';
  const array = [
    <Profile_Home key={0} />,
    <>
      <p>동영상</p>
    </>,
    <Comunity postData={id} key={1} state={commu} />,
    <>
      <p>정보</p>
    </>,
  ];
  useEffect(() => {
    async function dataSet() {
      const { data } = await supabase
        .from('user_table')
        .select('*')
        .eq('id', id)
        .returns<Tables<'user_table'>[]>();

      const findData = data?.find((o) => {
        if (o.id === Number(id)) return o;
      });
      if (findData) setUserName(findData.user_name);

      const cookieData = await getCookies();
      if (cookieData) {
        if (findData?.id === cookieData.id) {
          setUserData(cookieData.id);
          isMine(true);
          return;
        } else {
          const { data } = await supabase
            .from('follow_table')
            .select('*')
            .eq('to', findData?.id)
            .eq('from', cookieData.id)
            .returns<Tables<'follow_table'>[]>();
          console.log(data, findData?.id, cookieData.id);
          if (data?.length) setFollow(true);
        }
      }
    }
    dataSet();
  }, [id]);
  async function followFunction(follow: boolean) {
    const data = await getCookies();
    if (follow) {
      await supabase.from('follow_table').insert({ to: id, from: data?.id });
    } else {
      await supabase
        .from('follow_table')
        .delete()
        .match({ to: id, from: data?.id });
    }
  }
  return (
    <div className='flex justify-center flex-col'>
      <div className='flex flex-col justify-center'>
        <div className='flex ml-48'>
          <Image
            src={'/default_avatar/default_avatar.png'}
            width={100}
            height={100}
            alt=''
            className='rounded-full'
          />
          <div>{userName}</div>
          {mine ? (
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              로그아웃
            </button>
          ) : (
            <button
              className={`${follow ? 'bg-green-500' : 'bg-gray-700'}`}
              onClick={() => {
                setFollow(!follow);
                followFunction(!follow);
              }}
            >
              {follow ? '팔로우됨' : '팔로우안됨'}
            </button>
          )}
        </div>

        <div className='border-b-[0.01rem] w-[100%]'>
          <div className='ml-48'>
            <button
              className='bg-gray-700 mr-2'
              onClick={() => {
                setState(0);
              }}
            >
              홈
            </button>
            <button
              className='bg-gray-700 mr-2 border-b-[0.2rem]'
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
        </div>
        {array[state]}
      </div>
    </div>
  );
}
