'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import supabase from '../../../api/supabase';
import { Tables } from '../../../supabase';
import Profile_Home from '../../../components/profile/home';
import Comunity from '../../../components/profile/community';
import { useRouter } from 'next/navigation';
import { getCookies, deleteCookies } from '../../../api/getcookie';

export default function Home(props: { searchParams: { id: string } }) {
  const router = useRouter();
  const id = props.searchParams.id;
  const [userName, setUserName] = useState<string | null>('');
  const [state, setState] = useState(0);
  const [mine, isMine] = useState(false);
  const [follow, setFollow] = useState(false);
  const [userData, setUserData] = useState(0);

  useEffect(() => {
    async function dataSet() {
      const cookieData = await getCookies();
      const { data } = await supabase
        .from('user_table')
        .select('*')
        .eq('id', id)
        .returns<Tables<'user_table'>[]>();
      console.log(cookieData);

      if (cookieData) {
        setUserData(cookieData.id);
        console.log('set Active');
      }
      console.log(userData);
      const findData = data?.find((o) => {
        if (o.id === Number(id)) return o;
      });
      if (findData) setUserName(findData.user_name);
      console.log(findData);
      if (cookieData) {
        if (findData?.id === cookieData.id) {
          isMine(true);
          return;
        } else {
          const { data } = await supabase
            .from('follow_table')
            .select('*')
            .eq('to', findData?.id)
            .eq('from', cookieData.id)
            .returns<Tables<'follow_table'>[]>();
          console.log(data, findData?.id, cookieData.id, userData);
          if (data?.length) setFollow(true);
        }
      }
    }
    dataSet();
  }, [id, userData]);
  useEffect(() => {}, []);

  const array = [
    <Profile_Home key={0} />,
    <>
      <p>동영상</p>
    </>,
    <Comunity postData={id} key={1} state={'0'} />,
    <>
      <p>정보</p>
    </>,
  ];

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
          <div className='flex'>
            <div className='rounded-full border-2'>
              <Image
                src={'/default_avatar/default_avatar.png'}
                width={70}
                height={70}
                alt=''
                className='rounded-full p-1'
              />
            </div>
            <div className='flex items-center ml-2 text-[2rem]'>{userName}</div>
          </div>
          <div className='flex items-center ml-[64rem]'>
            {mine ? (
              <button
                className={`border-2 w-32 py-3 rounded-xl`}
                onClick={() => {
                  deleteCookies();
                  router.push('/');
                  window.location.reload();
                }}
              >
                로그아웃
              </button>
            ) : (
              <button
                className={`${
                  userData === 0
                    ? 'bg-black'
                    : `${follow ? 'bg-gray-700' : 'bg-green-500'} `
                } w-32 py-3 rounded-xl`}
                onClick={() => {
                  if (userData === 0) {
                    alert(
                      '로그인하지 않으면 팔로우 기능을 이용할 수 없습니다.',
                    );
                    return;
                  }
                  setFollow(!follow);
                  followFunction(!follow);
                }}
              >
                {follow ? '팔로우됨' : '팔로우'}
              </button>
            )}
          </div>
        </div>

        <div className='border-b-[0.01rem] w-[100%] mb-5 mt-5'>
          <div className='ml-48'>
            <button
              className={`mr-4 border-b-[0.2rem] pb-2 ${
                state === 0 ? 'border-white' : 'border-black'
              }`}
              onClick={() => {
                setState(0);
              }}
            >
              홈
            </button>
            <button
              className={`mr-4 border-b-[0.2rem] pb-2 ${
                state === 1 ? 'border-white' : 'border-black'
              }`}
              onClick={() => {
                setState(1);
              }}
            >
              동영상
            </button>
            <button
              className={`mr-4 border-b-[0.2rem] pb-2 ${
                state === 2 ? 'border-white' : 'border-black'
              }`}
              onClick={() => {
                setState(2);
              }}
            >
              커뮤니티
            </button>
            <button
              className={`mr-4 border-b-[0.2rem] pb-2 ${
                state === 3 ? 'border-white' : 'border-black'
              }`}
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
