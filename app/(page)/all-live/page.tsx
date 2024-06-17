'use client';

import ReactPlayer from 'react-player';
import supabase from '../../../api/supabase';
import { Tables } from '../../../supabase';
import { useState, useEffect } from 'react';
import Image from 'next/image';

async function allLive() {
  const liveData = (
    await supabase
      .from('video_list')
      .select('*')
      .returns<Tables<'video_list'>[]>()
  ).data;

  const userData = (
    await supabase
      .from('user_table')
      .select('*')
      .returns<Tables<'user_table'>[]>()
  ).data;

  if (!liveData) return;
  const returnData = liveData.map((o) => {
    const returnInfo = userData?.find((info) => {
      if (info.id === o.streamer) return info;
    });
    if (!returnInfo)
      return {
        ...o,
        user_name: '',
      };
    return {
      ...o,
      user_name: returnInfo.user_name,
    };
  });
  if (!returnData) return;
  return returnData;
}

export default function Home() {
  const [videoData, setVideoData] = useState<
    {
      user_name: string | null;
      category: string | null;
      id: number;
      link: string | null;
      Name: string | null;
      streamer: number | null;
    }[]
  >([]);

  useEffect(() => {
    const loadVideo = async () => {
      const allLiveData = await allLive();
      if (allLiveData) if (allLiveData) setVideoData(allLiveData);
    };
    loadVideo();
  }, []);
  return (
    <div>
      <div className='flex items-center mb-2'>
        <p className='font-bold text-[1.5rem] mr-5'>전체 라이브</p>
        <div className='w-52 border mt-2 mb-3 p-2 flex items-center h-7 rounded-full focus-within:border-green-500'>
          <input
            className='h-5 w-[100%] bg-[#141517] text-[0.9rem] outline-none'
            type='text'
            // value={inputText}
            placeholder='태그 검색'
          ></input>
          <button className='h-5 mb-1'>
            <span
              className='material-symbols-outlined'
              style={{ fontSize: '1.5rem', fontWeight: 'normal' }}
            >
              search
            </span>
          </button>
        </div>
      </div>
      <div className='grid grid-cols-5'>
        {videoData.map((o, i) => {
          if (o.link)
            return (
              <div key={i} className='flex flex-col mr-5 mb-4 '>
                <button
                  className='flex flex-col'
                  onClick={() => {
                    console.log('Click');
                  }}
                >
                  <ReactPlayer
                    url={o.link}
                    width='100%'
                    height='100%'
                    volume={0}
                    playing={false}
                    controls={false}
                    style={{
                      pointerEvents: 'none',
                    }}
                  />
                  <div className='flex mt-3'>
                    <div className='flex'>
                      <Image
                        src={'/default_avatar/default_avatar.png'}
                        width={35}
                        height={35}
                        alt=''
                        className='rounded-full'
                      />
                    </div>
                    <div className='flex flex-col text-start ml-3'>
                      <p className='-mb-1'>{o.Name}</p>
                    </div>
                  </div>
                </button>{' '}
                <div className='-mt-4'>
                  <button className='ml-12'>{o.user_name}</button>
                  <button
                    className='flex ml-11 -mt-1 bg-[#242528] rounded-md justify-center px-2'
                    onClick={() => {
                      console.log('tag Click');
                    }}
                  >
                    {o.category}
                  </button>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
}
