import { useState, useEffect } from 'react';
import supabase from './supabase';
import { Tables } from '../supabase';
import { getCookies } from './getcookie';
interface Message {
  id: number;
  text: string;
  user: string;
  created_at: string;
}
export default function Page(props: { url: string }) {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const urlChannel = props.url;
  useEffect(() => {
    const fetchMessage = async () => {
      const { data, error } = await supabase
        .from('chat_data')
        .select('*')
        .order('created_at', { ascending: true })
        .eq('room_id', urlChannel);
      if (error) {
        console.log(error);
      } else {
        setMessage(data || []);
      }
    };
    fetchMessage();

    supabase
      .channel(urlChannel)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'chat_data' },
        (payload) => {
          setMessage((prev) => [...prev, payload.new as Message]);
        },
      )
      .subscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    async function ID() {
      const cookieData = await getCookies();
      setUser(cookieData.id);
    }
    ID();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim().length > 0) {
      const userId = user;
      const { data, error } = await supabase
        .from('chat_data')
        .insert([{ text: newMessage, user: userId, room_id: urlChannel }])
        .returns<Tables<'chat_data'>>();

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
