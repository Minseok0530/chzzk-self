import Link from 'next/link';

export default function Menu() {
  return (
    <div className="flex flex-col w-14  mr-2">
      <div className="flex flex-col">
        <button className="border-black border mt-5">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '1.5rem' }}
          >
            videocam
          </span>
          <div className="" style={{ fontSize: '0.6rem' }}>
            전체<p>라이브</p>
          </div>
        </button>
        <button className="border-black border mt-2">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '1.5rem' }}
          >
            settings_backup_restore
          </span>
          <div style={{ fontSize: '0.6rem' }}>다시보기</div>
        </button>
        <button className="border-black border mt-2">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '1.5rem' }}
          >
            grid_view
          </span>
          <div style={{ fontSize: '0.6rem' }}>카테고리</div>
        </button>
        <button className="border-black border mt-2">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '1.5rem', fontWeight: '100' }}
          >
            favorite
          </span>
          <div style={{ fontSize: '0.6rem' }}>팔로잉</div>
        </button>
      </div>
      <div style={{ fontSize: '0.9rem' }}>추천</div>
      <div style={{ fontSize: '0.9rem' }}>파트너</div>
      <div className="divide-x divide-solid border-gray-50 border"></div>

      <div className="flex flex-col items-center">
        <Link href={'https://game.naver.com/'}>
          <svg
            //첫번쨰
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="header_icon__8SHkt"
          >
            <rect
              x="5.04996"
              y="4.51138"
              width="6.5"
              height="6.5"
              rx="1.25"
              stroke="currentColor"
              stroke-width="1.5"
            ></rect>
            <rect
              x="4.74997"
              y="14.2501"
              width="7.1"
              height="7.1"
              rx="3.55"
              stroke="currentColor"
              stroke-width="1.5"
            ></rect>
            <path
              d="M21.4169 10.9503H14.983C14.7933 10.9503 14.6727 10.7474 14.7634 10.5808L17.9804 4.67212C18.0751 4.49818 18.3248 4.49818 18.4195 4.67212L19.0782 4.31349L18.4195 4.67212L21.6365 10.5808C21.7272 10.7474 21.6066 10.9503 21.4169 10.9503Z"
              stroke="currentColor"
              stroke-width="1.5"
            ></path>
            <path
              d="M15.3999 14.8004L21.3994 20.8004"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
            <path
              d="M21.3997 14.8003L15.4002 20.8002"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>
          <div style={{ fontSize: '0.75rem' }}>게임</div>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <Link href={'https://game.naver.com/esports/League_of_Legends/home'}>
          <span
            //두번째
            className="material-symbols-outlined"
          >
            trophy
          </span>
          <div style={{ fontSize: '0.75rem' }}>E스포츠</div>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <Link href={'https://game.naver.com/original_series'}>
          <svg
            //세번째
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="header_icon__8SHkt"
          >
            <circle
              cx="13"
              cy="13"
              r="9"
              stroke="currentColor"
              stroke-width="1.5"
            ></circle>
            <path
              d="M8.89454 12.0289L10.117 15.1725C10.1469 15.2494 10.221 15.3 10.3034 15.3H15.6965C15.779 15.3 15.853 15.2494 15.8829 15.1725L17.1054 12.0289C17.1431 11.932 17.0261 11.849 16.9471 11.9167L15.125 13.4786L13.0839 10.3295C13.0445 10.2687 12.9555 10.2687 12.9161 10.3295L10.875 13.4786L9.05282 11.9167C8.97383 11.849 8.85684 11.932 8.89454 12.0289Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
            ></path>
          </svg>
          <div style={{ fontSize: '0.75rem' }}>오리지날</div>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <span
          //4번째
          className="material-symbols-outlined"
        >
          desktop_windows
        </span>
        <div style={{ fontSize: '0.75rem' }}>PC 게임</div>
      </div>

      <div className="flex flex-col items-center">
        <svg
          //다섯번 째
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="header_icon__8SHkt"
        >
          <path
            d="M16.2562 16.5455V14.7001H13.3917L16.5455 10.488H13.9899L14.7638 9.45456H12.2082L10.0961 12.2755H12.6517L9.45456 16.5455H16.2562Z"
            fill="currentColor"
          ></path>
          <rect
            x="4.29544"
            y="4.29529"
            width="17.4091"
            height="17.4091"
            rx="8.70455"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
          ></rect>
        </svg>
        <div style={{ fontSize: '0.75rem' }}>
          치지직<p>라운지</p>
        </div>
      </div>

      <div></div>
    </div>
  );
}
