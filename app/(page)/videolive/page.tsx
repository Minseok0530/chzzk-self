'use client';
import ReactPlayer from 'react-player';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Page(props: { searchParams: { url: string } }) {
  const router = useSearchParams();

  //console.log(router.keys());
  console.log(props.searchParams.url);
  return (
    <div>
      <ReactPlayer
        url={props.searchParams.url}
        width={'80%'}
        height={'45rem'}
      />
    </div>
  );
}
