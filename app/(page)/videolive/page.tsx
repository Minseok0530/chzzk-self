'use client';
import ReactPlayer from 'react-player';
import React from 'react';
import Chat from '../../../api/index';

export default function Page(props: { searchParams: { url: string } }) {
  return (
    <div className='flex'>
      <ReactPlayer
        url={props.searchParams.url}
        width={'75%'}
        height={'45rem'}
      />
      <Chat />
    </div>
  );
}
