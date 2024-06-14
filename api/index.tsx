import { useState, useEffect } from 'react';
import supabase from './supabase';
import { Tables } from '../supabase';

interface Message {
  id: number;
  text: string;
  user: string;
  created_at: string;
}
export default function Page() {
  const [message, setMessage] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const { data, error } = await supabase
        .from('chat_data')
        .select('*')
        .order('created_at', { ascending: true });
      if (error) {
        console.log(error);
      } else {
        setMessage(data || []);
      }
    };
    fetchMessage();

    supabase
      .channel('test_chat')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'chat_data' },
        (payload) => {
          console.log('hello');
          setMessage((prev) => [...prev, payload.new as Message]);
        },
      )
      .subscribe();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim().length > 0) {
      const userId = 'Test';
      const { data, error } = await supabase
        .from('chat_data')
        .insert([{ text: newMessage, user: userId }]);

      if (error) {
        console.error(error);
      } else {
        setNewMessage('');
      }
    }
  };

  return (
    <>
      {' '}
      <div>
        <h1>Chat App</h1>
        <div id='chat-container'>
          <div id='messages'>
            Message
            {message !== undefined
              ? message.map((message) => (
                  <div key={message.id}>
                    <strong>{message.user}</strong>: {message.text}
                  </div>
                ))
              : message}
          </div>
          <input
            type='text'
            value={newMessage}
            className='text-black'
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder='Type a message...'
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </>
  );
}
