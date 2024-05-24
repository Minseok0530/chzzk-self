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
        <strong className='font-bold tracking-tight text-xl'>
          전체 라이브
        </strong>
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

      {videoData.map((o, i) => {
        if (o.link)
          return (
            <div key={i}>
              <ReactPlayer url={o.link} width='100%' height='100%' volume={0} />
              <p>{o.Name}</p>
            </div>
          );
      })}
    </div>
  );
}
