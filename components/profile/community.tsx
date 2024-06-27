'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import supabase from '../../api/supabase';
import { Tables } from '../../supabase';
import { useRouter } from 'next/navigation';
import DetailPage from './detail/page';
import HomePage from './Home/page';
import WritePage from './write/page';
import { getCookies } from '../../api/getcookie';

export default function Page(post: { postData: string; state: string }) {
  const id = post.postData;
  console.log('in Comminity', id);
  const [community, setCommunity] = useState<Tables<'community'>[]>([]);
  const [content_id, setContentID] = useState<string>('');
  const [state, setState] = useState(0);
  const [fromUser, setFromUser] = useState<number>(0);

  const pageState = [
    <HomePage postData={id} key={0} />,
    <DetailPage searchParams={{ content_id: content_id, id: id }} key={1} />,
    <WritePage searchParams={{ id: id }} key={2} />,
  ];

  useEffect(() => {
    async function getDatas() {
      const { data } = await supabase
        .from('community')
        .select('*')
        .eq('user_id', id)
        .returns<Tables<'community'>[]>();
      if (data) setCommunity(data);
      const userdata = await getCookies();
      if (userdata) setFromUser(userdata?.id);
    }
    setState(0);
    getDatas();
  }, [id]);

  // async function sendData() {
  //   if (title === '' || message === '')
  //     return alert('빈칸이 없도록 해주십시오');

  //   const { data, error } = await supabase
  //     .from('community')
  //     .insert({ title: title, content: message, user_id: id })
  //     .returns<Tables<'community'>>();

  //   if (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div className='w-[100%] flex flex-col h-[30rem] items-center'>
      {state === 1 ? (
        pageState[1]
      ) : state === 2 ? (
        pageState[2]
      ) : (
        <>
          <p>Community</p>
          <div className='w-[95rem]'>
            {fromUser.toString() === id ? (
              <button
                className='hover:bg-gray-400'
                onClick={() => {
                  setState(2);
                }}
              >
                어떤 이야기를 하실껀가요
              </button>
            ) : (
              <></>
            )}
          </div>
          <div className='w-[95rem]'>
            {community.map((o, i) => {
              return (
                <div className='flex w-[80%]' key={o.id}>
                  <button
                    className='flex w-[90rem]'
                    onClick={() => {
                      setState(1);
                      setContentID(o.id.toString());
                    }}
                  >
                    {' '}
                    <div className='bg-gray-800 border border-gray-700 rounded-lg p-5 mb-4 w-full'>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='font-bold'>{o.user_id}</span>
                      </div>
                      <div className='mb-2 text-start'>
                        <p>{o.content}</p>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-green-500 cursor-pointer'>
                          댓글 ?
                        </span>
                        <div className='flex items-center space-x-2'>
                          <button className='text-gray-500 hover:text-gray-400'></button>
                          <span className='text-sm'>0</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
