'use client';

import ReactPlayer from 'react-player';
import { useEffect, useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Tables } from '../supabase';
import { BlobOptions } from 'buffer';
async function onClick(inputText: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    console.log('url or key is not found');
    return;
  }
  const supabase = createClient(supabaseUrl, supabaseKey);

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
  const index = [
    '1번 제목',
    '2번 제목',
    '3번 제목',
    '4번 제목',
    '5번 제목',
    '6번 제목',
    '7번 제목',
    '8번 제목',
    '9번 제목',
    '10번 제목',
    '11번 제목',
    '12번 제목',
    '13번 제목',
    '14번 제목',
    '15번 제목',
  ];

  const [isWindow, setIsWindow] = useState<boolean>(false);
  useEffect(() => {
    setIsWindow(true);
  }, []);

  // const loading = useRef<boolean>(false);
  // const [page, setPage] = useState({
  //   current: 1,
  //   total: 0,
  // });
  // const [link, setLinkIndex] = useState([]);
  // async function getCount() {
  //   const count = index;
  //   setPage({
  //     ...page,
  //     total: count.length,
  //   });
  // }
  // async function getList(count: number) {
  //   loading.current = true;
  // }
  // useEffect(() => {
  //   if (!loading.current) {
  //     const totalCount = getCount();
  //   }
  // }, [page]);
  // function setPageInfo(currentPage: number) {
  //   setPage({ ...page, current: currentPage });
  // }

  // const moreview = () => {};

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
              <div className="grid grid-cols-5">
                {index.map((o, i) => {
                  return (
                    <div className="mx-2 p-0" key={i}>
                      <ReactPlayer
                        url={'https://www.youtube.com/watch?v=EngW7tLk6R8'}
                        width="22rem"
                        height="15rem"
                        playing={true}
                        muted={true}
                        controls={false}
                        onRewind={true}
                      />
                      <div>{o}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div>
            <button>더보기</button>
          </div>
        </div>
        <div>좋아하실 꺼 같아요</div>
        <div>신입 스트리머 인사드립니다</div>
      </div>
    </div>
  );
}
