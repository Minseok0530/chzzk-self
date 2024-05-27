'use client';

import { useEffect, useState } from 'react';
import supabase from '../../../api/supabase';
import { Tables } from '../../../supabase';
import Image from 'next/image';

export default function Home() {
  const [category_Data, setCategoryData] = useState<
    {
      category_id: number | null;
      category_name: string | null;
      created_at: string;
      id: number;
    }[]
  >([]);

  async function categoryLoad() {
    const { data, error } = await supabase
      .from('category')
      .select('*')
      .returns<Tables<'category'>[]>();
    if (error) {
      console.error(error);
      return;
    }
    setCategoryData(data);
  }

  useEffect(() => {
    categoryLoad();
  }, []);
  return (
    <div className=''>
      <strong
        className='font-bold text-2xl w-[80px]'
        style={{ fontWeight: 400 }}
      >
        카테고리
      </strong>
      <div className='grid grid-cols-8'>
        {category_Data.map((o, i) => {
          return (
            <div key={i} className='mr-5 mb-10'>
              <button>
                <Image
                  className='rounded-xl'
                  src={`/category/${o.category_id}.png`}
                  alt={''}
                  width={200}
                  height={200}
                />
                <div className='mt-4 text-start'>{o.category_name}</div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
