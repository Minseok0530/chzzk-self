'use client';
import ReactPlayer from 'react-player';
import React from 'react';
import ChatPage from '../../../components/chatting-bar';
import { SocketProvider } from '../../../components/soket-provider';

export default function Page(props: { searchParams: { url: string } }) {
  //console.log(router.keys());
  console.log(props.searchParams.url);
  return (
    <div className='flex'>
      <ReactPlayer
        url={props.searchParams.url}
        width={'75%'}
        height={'45rem'}
      />
      <SocketProvider>
        <ChatPage />
      </SocketProvider>
    </div>
  );
}
