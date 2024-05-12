'use client';

import Menu from '../components/menu';
import Video from 'next-video';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { Tables } from '../supabase';
async function onClick(inputText: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    console.log('url or key is not found');
    return;
  }
  const supabase = createClient(supabaseUrl, supabaseKey);

  // supabase
  //   .from('todos')
  //   .insert([{ task: inputText }])
  //   .then((res) => {
  //     console.log(res);
  //   });
  const { data: value } = await supabase
    .from('todos')
    .select('*')
    .returns<Tables<'todos'>[]>();
  console.log(
    value?.map((o) => {
      return o.link;
    })
  );
}

export default function Home() {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  useEffect(() => {
    setIsWindow(true);
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <div>
          {isWindow && (
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=Qi9-K7M4K_U'}
              width="100%"
              height="22rem"
              playing={true}
              muted={true}
              loop={true}
              controls={false}
              onRewind={true}
            />
          )}
        </div>
        <div>
          <div>이 라이브 어떤가요</div>
          <div className="flex">
            {isWindow && (
              <div>
                <ReactPlayer
                  url={'https://www.youtube.com/watch?v=EngW7tLk6R8'}
                  width="25rem"
                  height="15rem"
                  playing={true}
                  muted={true}
                  controls={false}
                  onRewind={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
