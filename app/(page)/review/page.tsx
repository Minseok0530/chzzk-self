export default function Home() {
  return (
    <div>
      <div>다시보기</div>
      <div className='flex'>
        <button className='bg-[#2E3033] w-16 rounded-2xl mr-2'>팔로잉</button>
        <button className='bg-[#2E3033] w-16 rounded-2xl'>인기</button>
      </div>
      <div>{/*영상이 들어갈 곳*/}</div>
    </div>
  );
}
