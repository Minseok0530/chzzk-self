import Image from 'next/image';
import logo from '../public/chzzk-logo.gif';

export default async function Page() {
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

        <div className="w-96 border p-2 flex bg-[#141517] border-[#2D2D2F] items-center h-9 rounded-full">
          <input
            className="h-5 w-[100%] bg-[#141517] text-[0.95rem]"
            type="text"
            // value={inputText}
            placeholder="스트리머, 게임 영상검색"
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
