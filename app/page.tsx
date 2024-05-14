'use client';

import ReactPlayer from 'react-player';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import supabase from '../api/supabase';
import { Tables } from '../supabase';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  if (!linkdata) return;
  const sortLink = linkdata.data?.map((o) => {
    if (o !== null) {
      if (o) return { link: o.link, name: o.Name };
    }
  });

  if (sortLink) return sortLink;
}

export default function Home() {
  const [data, setData] = useState<
    ({ link: string | null; name: string | null } | undefined)[]
  >([]);
  const [maxSize, setMaxSize] = useState(5);

  useEffect(() => {
    const loadData = async () => {
      const videoList = await getLink(maxSize);
      if (videoList) {
        setData(videoList);
      }
    };
    loadData();
  }, [maxSize]);

  // const pageVideoMove = (urls: string) => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   router.push({
  //     pathname: '../app/(page)/videolive',
  //     query: { url: urls },
  //   });

  //   return;
  // };
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
        <div className="bg-gray-600 h-20 rounded-xl">
          <div className="bg-gray-600 hover:bg-white h-20 w-[20%]"></div>
        </div>
        <div>
          {isWindow && (
            <div className="flex">
              <ReactPlayer
                url={'https://www.youtube.com/watch?v=Qi9-K7M4K_U'}
                width="100%"
                height="22rem"
                playing={true}
                muted={true}
                loop={true}
                controls={false}
                onRewind={true}
                style={{ pointerEvents: 'none' }}
              >
                <div className="">Test</div>
              </ReactPlayer>
            </div>
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
                      <Link
                        key={i}
                        href={{
                          pathname: '/videolive',
                          query: { url: o?.link },
                        }}
                      >
                        {' '}
                        <button
                          className="flex flex-col justify-center-center hover:bg-gray-800"
                          //onClick={() => pageVideoMove(o?.link ?? '')}
                        >
                          <div className="w-[23rem] flex justify-center mt-2 rounded-full">
                            <ReactPlayer
                              url={o?.link === null ? '' : o?.link}
                              width="95%"
                              height="15rem"
                              playing={true}
                              muted={true}
                              controls={false}
                              onRewind={true}
                              style={{ pointerEvents: 'none' }}
                            />
                          </div>
                          <div>{o?.name}</div>
                        </button>
                      </Link>
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
