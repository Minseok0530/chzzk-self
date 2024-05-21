'use client';

import { useState, useEffect } from 'react';
import supabase from '../../../api/supabase';

export default function Page() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [id, setId] = useState<string>('');
  //   supabase.auth.signUp({email, password})

  const changeEmail = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log('Email:', email);
  };
  return (
    <div
      className='flex w-[100%] justify-center flex-col items-center'
      style={{
        fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 10",
      }}
    >
      Register
      <div className='border w-full'>
        <div>
          <span className='material-symbols-outlined'>person</span>
          <input
            placeholder='아이디'
            onChange={async (a) => {
              await changeEmail(a);
            }}
          />
        </div>
        <div>
          <span className='material-symbols-outlined'>lock</span>
          <input placeholder='비밀번호' />
        </div>
        <div>
          <span className='material-symbols-outlined'>mail</span>
          <input placeholder='이메일' />
        </div>

        <button className='w-96'>회원가입</button>
      </div>
    </div>
  );
}
