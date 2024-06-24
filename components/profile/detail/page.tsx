'use client';

import Image from 'next/image';
import { useState, useEffect, ChangeEvent } from 'react';
import supabase from '../../../api/supabase';
import { Tables } from '../../../supabase';
import { useRouter } from 'next/navigation';
import { getCookies } from '../../../api/getcookie';
export default function Home(props: {
  searchParams: { id: string; content_id: string };
}) {
  const router = useRouter();
  const id = props.searchParams.id;
  const [userName, setUserName] = useState<string | null>('');
  const [contentData, setContentData] = useState<Tables<'community'>>();
  const [nowUser, setNowUser] = useState<number>(0);
  const [comment, setComment] = useState('');
  const [loadData, setLoadData] = useState<Tables<'comment_table'>[]>([]);

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
      if (findData) {
        setUserName(findData.user_name);
      }
    }
    async function commentLoad() {
      const { data, error } = await supabase
        .from('comment_table')
        .select('*')
        .eq('content_id', props.searchParams.content_id)
        .returns<Tables<'comment_table'>[]>();
      if (!error) {
        setLoadData(data);
      }
    }
    async function contentData() {
      const { data } = await supabase
        .from('community')
        .select('*')
        .eq('id', props.searchParams.content_id)
        .returns<Tables<'community'>[]>();
      if (data) setContentData(data[0]);
      const cookieData = await getCookies();
      if (cookieData) setNowUser(cookieData.id);
    }
    dataSet();
    contentData();
    commentLoad();
  }, [id, props.searchParams.content_id]);
  function changeComment(e: ChangeEvent<HTMLInputElement>) {
    setComment(e.target.value);
  }
  async function commenUpload() {
    await supabase.from('comment_table').insert({
      content_id: props.searchParams.content_id,
      user_id: nowUser,
      comment: comment,
    });
  }

  return (
    <>
      {contentData ? (
        <>
          <div className='max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg'>
            <div className='mb-4'>
              <div className='flex items-center mb-2'>
                <div className='w-10 h-10 bg-gray-700 rounded-full mr-3'></div>
                <div>
                  <h2 className='font-bold'>
                    {userName}
                    {/* <span className='text-red-500 text-sm'>N</span> */}
                  </h2>
                </div>
              </div>
              <p className='mb-2'>{contentData.content}</p>
              <div className='flex justify-between items-center'></div>
            </div>
            <div className='border-t border-gray-700 pt-4'>
              <h3 className='text-lg font-semibold mb-4'>댓글</h3>
              <div className='flex items-center mb-4'>
                <input
                  type='text'
                  className='flex-grow bg-gray-700 text-gray-300 p-2 rounded-lg placeholder-gray-500 focus:outline-none'
                  placeholder='댓글을 입력하세요'
                  onChange={(e) => {
                    changeComment(e);
                  }}
                />
                <button
                  className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500'
                  onClick={() => {
                    commenUpload();
                  }}
                >
                  입력
                </button>
              </div>
              {loadData.map((o) => {
                return (
                  <>
                    <div>{o.user_id}</div>
                    {o.comment}
                  </>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
