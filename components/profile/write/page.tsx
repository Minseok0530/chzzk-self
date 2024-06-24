'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import supabase from '../../../api/supabase';
import { useRouter } from 'next/navigation';
import { Tables } from '../../../supabase';
export default function Home(props: { searchParams: { id: string } }) {
  const router = useRouter();
  const id = props.searchParams.id;
  const [message, setMessage] = useState<string>('');
  function chagneMessage(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
    console.log(e.target.value);
  }
  async function uploadMessage() {
    await supabase
      .from('community')
      .insert({ user_id: id, title: '', content: message });
  }
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
      }
    }
    dataSet();
  }, [id]);

  return (
    <div className='flex justify-center flex-col'>
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
            onChange={(e) => {
              chagneMessage(e);
            }}
          ></textarea>
        </div>
        <div className='flex justify-between items-center'>
          <button
            className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500'
            onClick={() => {
              uploadMessage();
              router.refresh();
            }}
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
}
