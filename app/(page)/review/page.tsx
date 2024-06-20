'use client';
import { useEffect, useState } from 'react';
import supabase from '../../../api/supabase';
import Uploader from '../../../components/uploader';
import { Tables } from '../../../supabase';
import ReactPlayer from 'react-player';

export default function Home() {
  const [uploadData, setUploadData] = useState<Tables<'uploadVideo'>[]>([]);
  useEffect(() => {
    async function onMounted() {
      const { data } = await supabase
        .from('uploadVideo')
        .select('*')
        .returns<Tables<'uploadVideo'>[]>();
      if (data) setUploadData(data);
    }
    onMounted();
  }, []);
  return (
    <div>
      <div className='text-[1.7rem]'>다시보기</div>
      <div className='flex mt-7'>
        <button className='flex bg-[#2E3033] rounded-2xl h-7 mr-2 items-center px-3 py-2'>
          팔로잉
        </button>
        <button className='flex bg-[#2E3033] rounded-2xl h-7 px-3 py-2 items-center'>
          인기
        </button>
      </div>
      <div>
        <Uploader />
        <div className='gird grid-cols-5 flex'>
          {uploadData.map((o, i) => {
            return (
              <div key={o.id}>
                <ReactPlayer
                  url={o.publicUrl ?? ''}
                  alt=''
                  width={100}
                  height={100}
                  loop={true}
                  playing={true}
                />
                {o.video_name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
