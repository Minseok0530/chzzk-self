'use client';

import ReactPlayer from 'react-player';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import supabase from '../api/supabase';
import { Tables } from '../supabase';
import Link from 'next/link';

import Image, { StaticImageData } from 'next/image';

import eldenring from '../public/category/Eldenring.jpg';
import justchat from '../public/category/justchat.png';
import lol from '../public/category/lol.jpg';
import mhw from '../public/category/Monster_hunter.jpg';
import vargame from '../public/category/varioust_game.png';

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

async function category() {
  const category = await supabase
    .from('category')
    .select('*')
    .returns<Tables<'category'>[]>();

  console.log(category);

  if (category) {
    return category.data?.map((o) => {
      return {
        category_name: o.category_name,
        category_id: o.category_id,
      };
    });
  }
}

export default function Home() {
  const [data, setData] = useState<
    ({ link: string | null; name: string | null } | undefined)[]
  >([]);
  const [maxSize, setMaxSize] = useState(5);
  const [category_data, setCategory] = useState<
    {
      category_name: string | null;
      category_id: number | null;
    }[]
  >([]);

  useEffect(() => {
    const loadCategory = async () => {
      const category_items = await category();
      console.log(category_items);
      if (category_items) setCategory(category_items);
    };
    loadCategory();
  }, []);

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
    <div className="flex mr-4 ml-8">
      <div className="flex flex-col w-full">
        <div className="bg-[#1E2022] h-20 rounded-xl mb-7">
          <div className=" hover:bg-[#2E3033] h-20 w-[20%] rounded-s-xl text-center">
            광?고
          </div>
        </div>
        <div>
          {isWindow && (
            <div className="flex rounded-xl">
              <ReactPlayer
                url={'https://www.youtube.com/watch?v=Qi9-K7M4K_U'}
                width="100%"
                height="22rem"
                playing={true}
                muted={true}
                loop={true}
                controls={false}
                onRewind={true}
                style={{
                  pointerEvents: 'none',
                  border: 1,
                  borderRadius: 15,
                  overflow: 'hidden',
                }}
              >
                <div className="">Test</div>
              </ReactPlayer>
            </div>
          )}
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-[1.5rem] font-bold tracking">
              이 라이브 어때요?
            </p>
            <button>전체보기</button>
          </div>
          <div className="w-full">
            {isWindow && (
              <div>
                <div className="grid grid-cols-5">
                  {data?.map((o, i) => {
                    const isLastItem = i === data.length - 1;
                    return (
                      <Link
                        key={i}
                        href={{
                          pathname: '/videolive',
                          query: { url: o?.link },
                        }}
                      >
                        <button
                          className={`hover:bg-gray-800 mt-3 w-[100%] ${
                            isLastItem ? '' : 'mr-3'
                          } `}
                          //onClick={() => pageVideoMove(o?.link ?? '')}
                        >
                          <div className="flex flex-col justify-center items-center">
                            <ReactPlayer
                              url={o?.link === null ? '' : o?.link}
                              width="97%"
                              height="12rem"
                              playing={true}
                              muted={true}
                              controls={false}
                              onRewind={true}
                              style={{ pointerEvents: 'none' }}
                            />
                          </div>
                          <div className="text-start">{o?.name}</div>
                        </button>
                      </Link>
                    );
                  })}
                </div>
                <div className="flex justify-center mt-3 items-center mx-auto">
                  <div className="w-[90%] border-t border-gray-300" />
                  <button
                    onClick={loadMore}
                    className="border rounded-full w-52 flex justify-center"
                  >
                    <div className="flex">
                      {maxSize > 5 ? '접기' : '더보기'}
                      <span className="material-symbols-outlined">
                        keyboard_arrow_down
                      </span>
                    </div>
                  </button>
                  <div className="w-[90%] border-t border-gray-300" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="">
          좋아하실 꺼 같아요
          <div className="flex">
            {category_data.map((o, i) => {
              return (
                <div key={i} className="mr-4">
                  <button>
                    <Image
                      className="rounded-xl"
                      src={`/category/${o.category_id}.png`}
                      alt={''}
                      width={200}
                      height={200}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          신입 스트리머 인사드립니다
          <div className="grid grid-cols-5">
            {data?.map((o, i) => {
              const isLastItem = i === data.length - 1;
              return (
                <Link
                  key={i}
                  href={{
                    pathname: '/videolive',
                    query: { url: o?.link },
                  }}
                >
                  <button
                    className={`hover:bg-gray-800 mt-3 w-[100%] ${
                      isLastItem ? '' : 'mr-3'
                    } `}
                    //onClick={() => pageVideoMove(o?.link ?? '')}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <ReactPlayer
                        url={o?.link === null ? '' : o?.link}
                        width="97%"
                        height="12rem"
                        playing={true}
                        muted={true}
                        controls={false}
                        onRewind={true}
                        style={{ pointerEvents: 'none' }}
                      />
                    </div>
                    <div className="text-start">{o?.name}</div>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
