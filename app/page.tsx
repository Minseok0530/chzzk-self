'use client';

import Menu from '../components/menu';
import Video from 'next-video';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

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
        <div className="flex justify-center">
          <input
            className="h-5 border border-black border-spacing-3 bg-gray-800"
            type="text"
          />
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">confirmation_number</span>
          <span className="material-symbols-outlined">light_mode</span>
          <div>로그인</div>
        </div>
        <div>
          <Video
            src={''}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="h-80"
          />
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
