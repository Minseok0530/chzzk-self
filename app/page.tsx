'use client';

import Menu from '../components/menu';
import Video from 'next-video';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

async function onClick(inputText: string) {
  console.log('console.log');

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
  const { data } = await supabase.from('todos').select('*');
  console.log(data);
}

export default function Home() {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  useEffect(() => {
    setIsWindow(true);
  }, []);
  return (
    <div className="flex">
      <div className="w-20">
        <Menu />
      </div>
      <div className="flex flex-col w-full">
        <div className="grid grid-rows-2 grid-flow-col gap-0 place-items-end">
          <div className="w-96 border p-2 flex bg-gray-800 border-gray-100 items-center h-9 my-2 rounded-full row-span-2 end-0">
            <input
              className="h-5 w-[100%] bg-gray-800"
              type="text"
              // value={inputText}
              placeholder="스트리머, 게임 영상검색"
            ></input>
            <button className="h-5 mb-1" onClick={() => onClick('asd')}>
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>

          <div className="row-span-2">
            <button className="mr-2">
              <span className="material-symbols-outlined">
                confirmation_number
              </span>
            </button>
            <button className="mr-2">
              <span className="material-symbols-outlined">light_mode</span>
            </button>
            <button className="border border-gray-700 rounded-lg w-20 h-10">
              로그인
            </button>
          </div>
        </div>
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
              <ReactPlayer
                url={'https://www.youtube.com/watch?v=Qi9-K7M4K_U'}
                width="25rem"
                height="15rem"
                playing={true}
                muted={true}
                controls={false}
                onRewind={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
