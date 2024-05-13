'use client';

import Image from 'next/image';
import logo from '../public/chzzk-logo.gif';
import { useRef } from 'react';

// eslint-disable-next-line @next/next/no-async-client-component

export default function Page() {
  let clickFinder = useRef(false);
  const searchClick = () => {
    clickFinder.current = !clickFinder.current ? true : false;
    console.log(clickFinder);
  };

  return (
    <div>
      <div className="flex mt-3 justify-between mx-4">
        <button className="flex ">
          <span className="material-symbols-outlined">menu</span>
          <Image
            className="-ml-3"
            src={logo}
            alt={''}
            width={100}
            height={100}
          />
        </button>
        <div
          className="w-96 border p-2 flex bg-[#141517] items-center h-9 rounded-full"
          style={
            clickFinder.current === true
              ? { borderColor: 'green' }
              : { borderColor: 'gray' }
          }
        >
          <input
            className="h-5 w-[100%] bg-[#141517] text-[0.9rem] outline-none"
            type="text"
            // value={inputText}
            placeholder="스트리머, 게임 영상검색"
            onClick={() => searchClick}
          ></input>
          <button className="h-5 mb-1">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '1.5rem', fontWeight: 'normal' }}
            >
              search
            </span>
          </button>
        </div>

        <div className="flex my-1">
          <button className="mr-3 pt-1">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '1.9rem', fontWeight: 200 }}
            >
              confirmation_number
            </span>
          </button>
          <button className="mr-3 pt-1">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '1.9rem', fontWeight: 200 }}
            >
              light_mode
            </span>
          </button>
          <button className="border border-gray-700 rounded-lg w-20">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
