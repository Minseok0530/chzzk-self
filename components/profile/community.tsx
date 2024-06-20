'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import supabase from '../../api/supabase';
import { Tables } from '../../supabase';
import Image from 'next/image';

export default function Page(post: { postData: string }) {
  const id = post.postData;
  console.log('in Comminity', id);
  const [message, setMessage] = useState('');
  const [community, setCommunity] = useState<Tables<'community'>[]>([]);
  const inputMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
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

  return (
    <div className='w-[94rem] flex'>
      <p>Community</p>
      <div className='flex flex-col'>
        <input className='w-96 mb-2 text-black' />
        <textarea className='w-96 text-black' />
      </div>
      <div className='w-20'>
        {community.map((o) => {
          return (
            <>
              <button className='flex w-[90rem]'>
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
          );
        })}
      </div>
    </div>
  );
}
