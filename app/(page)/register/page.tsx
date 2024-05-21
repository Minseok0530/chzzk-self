'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import supabase from '../../../api/supabase';

export default function Page() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [isButtonDisabled, setButtonDisable] = useState(false);
  //   supabase.auth.signUp({email, password})

  // const emailState
  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    setButtonDisable(true);
    if (error) {
      console.error(error.message);
      setButtonDisable(false);
      return;
    } else console.log(data);
    setTimeout(() => {
      setButtonDisable(false);
    }, 3000);

    const { data: logindata, error: loginError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
    console.log(logindata, loginError);
  };
  const changeEmail = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // console.log(e.target.value, email);
    // console.log('Email:', email);
  };
  const changePassword = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    console.log('Email State : ', email);
  }, [email]);

  useEffect(() => {
    console.log('Password State : ', password);
  }, [password]);

  return (
    <div
      className='flex w-[100%] justify-center flex-col items-center'
      style={{
        fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 10",
      }}
    >
      <Image
        src='/Logo/naver_logo.png'
        width={130}
        height={100}
        alt=''
        className='-ml-[380px] -mt-[40px] -mb-[10px]'
      />
      <></>
      <div className='border flex flex-col justify-center items-center w-[460px]'>
        <div className='w-[97%] h-12 items-center flex'>
          <span className='material-symbols-outlined'>person</span>
          <input
            className='w-full'
            placeholder='아이디'
            onChange={async (a) => {
              await changeEmail(a);
            }}
          />
        </div>
        <div className='w-[97%] h-12 items-center flex'>
          <span className='material-symbols-outlined'>lock</span>
          <input
            placeholder='비밀번호'
            className='w-full'
            onChange={(e) => {
              changePassword(e);
            }}
          />
        </div>
        <div className='w-[97%] h-12 items-center flex'>
          <span className='material-symbols-outlined'>mail</span>
          <input placeholder='이메일' className='w-full' />
        </div>
      </div>
      <div className='border flex flex-col justify-center items-center w-[460px] mt-5'>
        <div className='w-full flex h-12 items-center '>
          <span className='material-symbols-outlined'>person</span>
          <input className='w-full' placeholder='이름'></input>
        </div>
        <div className='w-full flex h-12 items-center'>
          <span className='material-symbols-outlined'>
            perm_contact_calendar
          </span>
          <input className='w-full' placeholder='생년월일'></input>
        </div>
      </div>
      <button
        className='w-96 border border-black'
        onClick={() => signUp(email, password)}
        disabled={isButtonDisabled}
      >
        회원가입
      </button>
    </div>
  );
}
