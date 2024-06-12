'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {} from '../api/chat/';
import { useSocket } from './soket-provider';

interface message {
  userId: string;
  content: string;
}
const ChatPage = () => {
  const [messages, setMessages] = useState<message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const { socket, isConnected } = useSocket();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('message', (data: any) => {
      setMessages((messages) => [...messages, ...[data]]);
    });

    return () => {
      socket.off('message');
    };
  }, [socket, messages]);

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.post('../api/chat/', {
        userId: userId,
        content: currentMessage,
      });
      setCurrentMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='rounded-xl border bg-card text-card-foreground shadow w-[300px] mx-auto'>
      <div className='p-6'>
        <p>{isConnected ? '연결 완료' : '연결중'}</p>
      </div>
      <div className='p-6 pt-0'>
        <div className='space-y-4'>
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ' +
                (message.userId !== userId
                  ? 'ml-auto bg-blue-400 text-white'
                  : 'bg-zinc-100')
              }
            >
              {message.content}
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center p-6 pt-[35rem]'>
        <form className='flex w-full items-center space-x-2'>
          <input
            type='text'
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex-1'
          ></input>
          <button
            type='submit'
            onClick={(e) => sendMessage(e)}
            className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-primary/90 h-9 w-9'
          >
            전송
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
