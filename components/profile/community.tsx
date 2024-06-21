'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import supabase from '../../api/supabase';
import { Tables } from '../../supabase';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page(post: { postData: string }) {
  const router = useRouter();
  const id = post.postData;
  console.log('in Comminity', id);
  const [community, setCommunity] = useState<Tables<'community'>[]>([]);

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
      <p>Community</p>
      <div className='w-[95rem]'>
        <button
          className='hover:bg-gray-400'
          onClick={() => {
            router.push(`/profile/write?id=${id}`);
          }}
        >
          어떤 이야기를 하실껀가요
        </button>
      </div>
      <div className='w-[95rem]'>
        {community.map((o, i) => {
          return (
            <div className='flex w-[80%]' key={o.id}>
              <Link
                className='flex w-[90rem]'
                href={{
                  pathname: '/profile/detail',
                  query: { id: id, content_id: o.id },
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
                      댓글 1
                    </span>
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
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
