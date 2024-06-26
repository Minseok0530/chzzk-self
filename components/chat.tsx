import { useState, useEffect } from 'react';
import supabase from '../api/supabase';
import { Tables } from '../supabase';
import { getCookies } from '../api/getcookie';
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
    console.log(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    async function ID() {
      const cookieData = await getCookies();
      if (cookieData) setUser(cookieData.name);
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
  useEffect(() => {}, []);
  return (
    <div className='w-96'>
      <div className='h-full w-[100%]'>
        <div className='flex justify-between'>
          <button>
            <span className='material-symbols-outlined'>logout</span>
          </button>
          <h1>채팅</h1>
          <button>
            <span className='material-symbols-outlined'>more_vert</span>
          </button>
        </div>
        <div
          id='chat-container'
          className='flex flex-col justify-between h-[43rem]'
        >
          <div id='messages' className='flex-grow overflow-y-auto '>
            <p className='flex justify-center mt-2 mb-1'>
              채팅에 오신걸 환영합니다
            </p>
            {message.length > 0
              ? message.map((message) => (
                  <div key={message.id}>
                    <strong>{message.user}</strong> {message.text}
                  </div>
                ))
              : ''}
          </div>
          <div className='flex mt-[100%] flex-col'>
            <div className='flex bg-gray-500 py-2 px-2 rounded-lg'>
              <input
                type='text'
                value={newMessage}
                className='text-white flex-grow bg-gray-500 focus:outline-none'
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={
                  user !== ''
                    ? `채팅을 입력해주세요`
                    : '채팅을 하기 위해서는 로그인을 해주세요'
                }
              />
              <button>
                <span className='material-symbols-outlined'>
                  change_history
                </span>
              </button>
              <button>
                <span className='material-symbols-outlined'>
                  sentiment_satisfied
                </span>
              </button>
            </div>
            <div className='flex justify-end mt-3'>
              <button
                onClick={handleSendMessage}
                className={`flex ${
                  user !== '' ? 'bg-gray-500' : 'bg-gray-800'
                } py-1 px-3 rounded-lg`}
                disabled={user !== '' ? false : true}
              >
                {user !== '' ? '채팅' : '채팅'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
