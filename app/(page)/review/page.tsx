'use client';

export default function Home() {
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
        <input className='flex border' type='file'></input>
        {/*영상이 들어갈 곳*/}
      </div>
    </div>
  );
}
