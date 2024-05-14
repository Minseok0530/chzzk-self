'use client';

import ReactPlayer from 'react-player';
import { useEffect, useRef, useState } from 'react';
import supabase from '../api/supabase';
import { Tables } from '../supabase';
import nextAppLoader from 'next/dist/build/webpack/loaders/next-app-loader';

const index = ['1번 제목', '2번 제목', '3번 제목'];
// async function getAllLink() {

//   const { data: value } = await supabase
//     .from('todos')
//     .select('*')
//     .returns<Tables<'todos'>[]>();
//   console.log(
//     value?.map((o) => {
//       return o.link;
//     })
//   );
// }

async function getLink(maxnumber: number) {
  const linkdata = await supabase
    .from('todos')
    .select('*')
    .limit(maxnumber)
    .returns<Tables<'todos'>[]>();
  const sortLink = linkdata.data?.map((o) => {
    if (!o) return '';
    else return o.link;
  });

  if (sortLink) return sortLink;
}

export default function Home() {
  //let data: (string | null)[];

  const [data, setData] = useState<(string | null)[]>([]);
  const [maxSize, setMaxSize] = useState(5);
  const [currentIndex, setIndex] = useState(5);
  const videoList = getLink(maxSize);

  useEffect(() => {
    const loadData = async () => {
      const videoList = await getLink(maxSize);
      if (videoList) {
        setData(videoList);
      }
    };
    loadData();
  }, [maxSize]);

  // videoList.then((items) => {
  //   if (items)
  //     return (data = items?.map((o) => {
  //       if (!o) return '';
  //       return o;
  //     }));
  // });

  async function loadMore() {
    if (maxSize > 5) setMaxSize(5);
    else setMaxSize(10);
    console.log(maxSize);
  }

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
                <div className="grid grid-cols-5">
                  {data?.map((o, i) => {
                    return (
                      <div className="mx-2 p-0" key={i}>
                        <ReactPlayer
                          url={o === null ? '' : o}
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
                <div>
                  <button onClick={loadMore}>
                    {maxSize > 5 ? '접기' : '더보기'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>좋아하실 꺼 같아요</div>
        <div>신입 스트리머 인사드립니다</div>
      </div>
    </div>
  );
}
