import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Menu() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <h1>Chzzk</h1>
      <div className="flex flex-col">
        <button className="border-black border mt-5">
          <span className="material-symbols-outlined">videocam</span>
          <div>
            전체<p>라이브</p>
          </div>
        </button>
        <button className="border-black border mt-2">
          <span className="material-symbols-outlined">
            settings_backup_restore
          </span>
          <div>다시보기</div>
        </button>
        <button
          className="border-black border mt-2"
          onClick={() => {
            router.push('@/app/Page/all-live');
          }}
        >
          <span className="material-symbols-outlined">grid_view</span>
          <div>카테고리</div>
        </button>
        <button className="border-black border mt-2">
          <span className="material-symbols-outlined">favorite</span>
          <div>팔로잉</div>
        </button>
      </div>
      <div>팔로우</div>
      <div>추천</div>
    </div>
  );
}
