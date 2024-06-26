'use client';

import ReactPlayer from 'react-player';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import supabase from '../api/supabase';
import { Tables } from '../supabase';
import Link from 'next/link';

import Image from 'next/image';
import { link } from 'fs';

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
  const { data } = await supabase
    .from('video_list')
    .select('*')
    .limit(maxnumber)
    .returns<Tables<'video_list'>[]>();
  async function findUserName() {
    const userData = await supabase
      .from('user_table')
      .select('*')
      .returns<Tables<'user_table'>[]>();

    return userData;
  }

  const userName = await findUserName();
  if (!data || !userName) return [];
  const returnData = data?.map((o) => {
    const returninfo = userName.data?.find((data, i) => {
      if (data.id === o.streamer) return data;
    });
    console.log(returninfo);
    if (!returninfo) {
      return {
        ...o,
        user_name: '',
      };
    }
    return {
      ...o,
      user_name: returninfo?.user_name,
    };
  });
  if (!returnData) return;

  return returnData;
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
    {
      category: string | null;
      id: number;
      link: string | null;
      Name: string | null;
      streamer: number | null;
      user_name: string | null;
    }[]
  >([]);
  const [maxSize, setMaxSize] = useState(5);
  const [userData, setUserData] = useState<Tables<'user_table'>>();
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
      const data = await getLink(maxSize);

      if (data !== null && data !== undefined) {
        setData(data);
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
    <div className='flex mr-4'>
      <div className='flex flex-col w-full'>
        <div className='bg-[#1E2022] h-20 rounded-xl mb-7'>
          <div className=' hover:bg-[#2E3033] h-20 w-[20%] rounded-s-xl text-center'>
            광?고
          </div>
        </div>
        <div>
          {isWindow && (
            <div
              className='flex rounded-xl w-full'
              style={{ overflow: 'hidden' }}
            >
              <ReactPlayer
                url={'https://youtu.be/3BBshtoMFKk?t=18'}
                width='100%'
                height='22rem'
                playing={true}
                muted={true}
                loop={true}
                controls={false}
                onRewind={false}
                volume={0}
                config={{
                  youtube: {
                    playerVars: { disablekb: 1, control: 0, modestbranding: 1 },
                  },
                }}
                style={{
                  aspectRatio: '16:9',
                  pointerEvents: 'none',
                  border: 1,
                  borderRadius: 15,
                  overflow: 'hidden',
                  objectFit: 'cover',
                  zIndex: -1,
                }}
              />
              <span
                style={{ position: 'absolute' }}
                className='flex mt-5 flex-col content-between ml-8 w-[90%]'
              >
                <div className='flex'>
                  <div className='bg-red-600 mr-6 w-20 h-7 text-center rounded-md'>
                    NO LIVE
                  </div>
                  <div className='mr-6 w-28 h-7 text-center rounded-md text-red-600 font-bold'>
                    21명의 시청
                  </div>
                </div>
                <div className='font-bold text-xl'>황금나무의 그림자DLC</div>
                <div className='rounded-full mt-44 flex items-center w-full'>
                  <div className='flex items-center w-full justify-between'>
                    <div className='flex items-center'>
                      <Image
                        className='rounded-full border border-green-900 border-10'
                        src={'/default_avatar/default_avatar.png'}
                        width={80}
                        height={80}
                        alt=''
                      />
                      <div className='flex flex-col'>
                        <div className='text-2xl ml-5'>엘든링 온다니까!</div>
                        <div className='flex ml-5 text-green-500'>
                          <span className='material-symbols-outlined'>
                            stadia_controller
                          </span>
                          엘든링
                        </div>
                      </div>
                    </div>
                    <div className=''>
                      <div className='flex'>
                        {[1, 2, 3, 4].map((o, i) => {
                          return (
                            <div
                              key={i}
                              className='bg-black mr-3 w-[6.5rem] h-14 rounded-md border hover:border-green-500'
                            ></div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          )}
        </div>
        <div className='bg-white w-full mt-5 h-[5rem] rounded-xl flex justify-between'>
          <div className='flex'>a</div>
          <div className='bg-gray-500 flex h-6'>A</div>
        </div>
        <div className='mt-5'>
          <div className='flex justify-between'>
            <p className='text-[1.5rem] font-bold tracking'>
              이 라이브 어때요?
            </p>
            <Link href='/all-live' className='mr-3'>
              <button>전체보기</button>
            </Link>
          </div>
          <div className='w-full'>
            {isWindow && (
              <div>
                <div className='grid grid-cols-5'>
                  {data?.map((o, i) => {
                    console.log(typeof o.streamer);
                    if (o.link !== null)
                      return (
                        <div className='flex flex-col mr-5 mb-4 h-60' key={i}>
                          <Link
                            key={i}
                            href={{
                              pathname: '/videolive',
                              query: { url: o?.link },
                            }}
                          >
                            <div className='flex flex-col mr-5 mb-4'>
                              <button
                                className='flex flex-col h-40'
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
                                  light={true}
                                  controls={false}
                                  style={{
                                    pointerEvents: 'none',
                                  }}
                                />
                              </button>
                            </div>
                          </Link>

                          <div className='flex'>
                            <Link
                              className='flex'
                              href={{
                                pathname: '/profile',
                                query: { id: o.streamer },
                              }}
                            >
                              <Image
                                src={'/default_avatar/default_avatar.png'}
                                width={35}
                                height={35}
                                alt=''
                                className='rounded-full'
                              />
                            </Link>
                            <div className='flex flex-col text-start ml-3'>
                              <p className='-mb-1'>{o.Name}</p>
                            </div>
                          </div>
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
                <div className='flex justify-center mt-3 items-center mx-auto w-[96%]'>
                  <div className='w-[90%] border-t border-gray-300' />
                  <button
                    onClick={loadMore}
                    className='border rounded-full w-52 flex justify-center'
                  >
                    <div className='flex'>
                      {maxSize > 5 ? '접기' : '더보기'}
                      <span className='material-symbols-outlined'>
                        {maxSize > 5
                          ? 'keyboard_arrow_up'
                          : 'keyboard_arrow_down'}
                      </span>
                    </div>
                  </button>
                  <div className='w-[90%] border-t border-gray-300' />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=''>
          좋아하실 꺼 같아요
          <div className='flex'>
            {category_data.map((o, i) => {
              return (
                <div key={i} className='mr-4'>
                  <button>
                    <Image
                      className='rounded-xl'
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
          <div className='grid grid-cols-5'>
            {data?.map((o, i) => {
              if (i < 5)
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
                        i === 4 ? '' : 'mr-3'
                      } `}
                      //onClick={() => pageVideoMove(o?.link ?? '')}
                    >
                      <div className='flex flex-col justify-center items-center'>
                        <ReactPlayer
                          url={o?.link === null ? '' : o?.link}
                          width='97%'
                          height='12rem'
                          playing={false}
                          muted={true}
                          controls={false}
                          style={{ pointerEvents: 'none' }}
                        />
                      </div>
                      <div className='text-start'>{o?.Name}</div>
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
