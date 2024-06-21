'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import supabase from '../../api/supabase';
import { Tables } from '../../supabase';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page(post: { postData: string }) {
  const router = useRouter();
  const id = post.postData;
  console.log('in Comminity', id);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [community, setCommunity] = useState<Tables<'community'>[]>([]);
  const inputMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const inputTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    async function getDatas() {
      const { data } = await supabase
        .from('community')
        .select('*')
        .eq('user_id', id)
        .returns<Tables<'community'>[]>();
      if (data) setCommunity(data);
    }
    getDatas();
  }, [id]);

  async function sendData() {
    if (title === '' || message === '')
      return alert('빈칸이 없도록 해주십시오');

    const { data, error } = await supabase
      .from('community')
      .insert({ title: title, content: message, user_id: id })
      .returns<Tables<'community'>>();

    if (error) {
      console.error(error);
    }
  }

  return (
    <div className='w-[100%] flex flex-col h-[30rem] items-center'>
      <p>Community</p>
      <div className='h-20'>
        {community.map((o, i) => {
          return (
            <div className='flex w-96 h-20' key={o.id}>
              <>
                <button
                  className='flex w-[90rem]'
                  onClick={() => {
                    console.log('Click', i);
                  }}
                >
                  <Image
                    src={'/default_avatar/default_avatar.png'}
                    width={30}
                    height={30}
                    alt=''
                    className='rounded-full'
                  />
                  <div className='flex flex-col w-full'>
                    <p className='bg-gray-900'>{o.title}</p>
                    <p className='bg-gray-900'>{o.content}</p>
                  </div>
                </button>
              </>
            </div>
          );
        })}
        <div className='flex flex-col'>
          <input
            className='w-96 mb-2 text-black'
            onChange={(e) => inputTitle(e)}
          />
          <textarea
            className='w-96 h-28 text-black'
            onChange={(e) => inputMessage(e)}
          />
          <button
            className='bg-green-700 w-full'
            onClick={() => {
              sendData();
              router.refresh();
            }}
          >
            올리기
          </button>
        </div>
      </div>
    </div>
  );
}
