import Image from 'next/image';
import { Abel } from 'next/font/google';

const font = Abel({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Page() {
  return (
    <div className={font.className}>
      <div className='text-[1.65rem]'>팔로잉</div>
      <div className='flex justify-center items-center flex-col mt-32'>
        <Image
          src={'/AD/follow_no_login.png'}
          alt=''
          width={150}
          height={150}
        />
        <div>로그인하고 팔로잉 목록을 확인해보세요</div>
        <button className='bg-[rgba(0,255,163,.9)] p-3 w-28 text-black rounded-lg font-bold'>
          로그인
        </button>
      </div>
    </div>
  );
}
