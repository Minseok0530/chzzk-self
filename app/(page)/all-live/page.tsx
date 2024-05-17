'use client';

import ReactPlayer from 'react-player';
import supabase from '../../../api/supabase';
import { Tables } from '../../../supabase';
import { useState, useEffect } from 'react';

async function allLive() {
  const liveData = (
    await supabase.from('todos').select('*').returns<Tables<'todos'>[]>()
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
      All Live
      {videoData.map((o, i) => {
        if (o.link)
          return (
            <div key={i}>
              <ReactPlayer url={o?.link} />
            </div>
          );
      })}
    </div>
  );
}
