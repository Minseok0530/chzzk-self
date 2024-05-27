'use client';

import ReactPlayer from 'react-player';
import supabase from '../../../api/supabase';
import { Tables } from '../../../supabase';
import { useState, useEffect } from 'react';

async function allLive() {
  const liveData = (
    await supabase
      .from('video_list')
      .select('*')
      .returns<Tables<'video_list'>[]>()
  ).data;

  return liveData?.map((o, i) => {
    return o;
  });
}

export default function Home() {
  const [videoData, setVideoData] = useState<
    {
      category: number | null;
      id: number;
      link: string | null;
      Name: string | null;
      streamer: string | null;
    }[]
  >([]);

  useEffect(() => {
    const loadVideo = async () => {
      const allLiveData = await allLive();
      if (allLiveData) setVideoData(allLiveData);
    };
    loadVideo();
  }, []);
  return (
    <div>
      <div className='flex items-center'>
        <p className='font-bold text-[1.5rem]'>전체 라이브</p>
        <div className='w-52 border mt-2 mb-3 p-2 flex items-center h-9 rounded-full focus-within:border-green-500'>
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
              <button
                key={i}
                className='mb-8 flex flex-col mr-4'
                onClick={() => {
                  console.log('Click');
                }}
              >
                <ReactPlayer
                  url={o.link}
                  width='100%'
                  height='100%'
                  volume={0}
                  controls={false}
                  style={{
                    pointerEvents: 'none',
                  }}
                />
                <div className='mt-5'>{o.Name}</div>
              </button>
            );
        })}
      </div>
    </div>
  );
}
