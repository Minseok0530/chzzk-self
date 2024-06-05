'use client';

import { useState, useEffect, SetStateAction, useDebugValue } from 'react';
import Image from 'next/image';
import supabase from '../../../api/supabase';
import { Tables } from '../../../supabase';

export default function Page() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [isButtonDisabled, setButtonDisable] = useState(false);
  const [selectedFile, setFileSelected] = useState<FileList>();
  const [userName, setUserName] = useState<string>('');
  //   supabase.auth.signUp({email, password})

  const [file, setFile] = useState();
  const fileUpload = async () => {
    const { data: loginData, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log(loginData.user);
    if (error) console.error(error);
    if (!selectedFile) {
      alert('파일을 선택하세요.');
      return;
    }
    try {
      console.log('Files', selectedFile[0]);
      const { data: selectedFileData, error: fileError } =
        await supabase.storage
          .from('avatar')
          .upload(`test/${loginData.user?.id}`, selectedFile[0]);
      // .upload('user_avatar', selectedFile[0]);

      if (error || fileError) {
        console.log(fileError?.message);
        throw error;
      }
      alert('이미지 업로드가 완료되었습니다');
      await supabase
        .from('user_avatar')
        .insert({ image_id: loginData.user.id });
    } catch (error) {
      console.error(error);
      alert('오류가 발생했습니다');
    }
  };
  useEffect(() => {
    setFileSelected(selectedFile);
    console.log('useEffect :', selectedFile);
  }, [selectedFile]);
  const filehandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    setFileSelected(event.target.files);
  };
  // const emailState
  const signUp = async (email: string, password: string, user_name: string) => {
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
    // await supabase.auth.signUp({
    //  options:{data:{}}
    // })
    const { data: logindata, error: loginError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
    const { data: insertData } = await supabase
      .from('user_table')
      .insert([
        {
          partner_set: false,
          user_name: user_name,
          user_password: password,
        },
      ])
      .returns<Tables<'user_table'>>();

    await supabase.storage
      .from('user_avatar')
      .upload('/test', selectedFile !== undefined ? selectedFile[0] : '');
    console.log(logindata, loginError, insertData);
    if (logindata === null) alert('회원가입에 실패했습니다.');
    else alert('회원가입이 완료되었습니다.');
  };

  const changeEmail = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const changeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
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
      <div className='border flex flex-col justify-center items-center w-[460px] rounded-lg'>
        <div className='w-[100%] h-12 items-center flex border-b pl-2'>
          <span className='material-symbols-outlined'>person</span>
          <input
            className='w-full'
            placeholder='아이디'
            onChange={(e) => {
              changeUserId(e);
            }}
          />
        </div>
        <div className='w-[100%] h-12 items-center flex border-b pl-2'>
          <span className='material-symbols-outlined'>lock</span>
          <input
            placeholder='비밀번호'
            className='w-full'
            onChange={(e) => {
              changePassword(e);
            }}
          />
        </div>
        <div className='w-[100%] h-12 items-center flex pl-2'>
          <span className='material-symbols-outlined'>mail</span>
          <input
            placeholder='이메일'
            className='w-full'
            onChange={async (a) => {
              await changeEmail(a);
            }}
          />
        </div>
      </div>
      {/* <div className='border flex flex-col justify-center items-center w-[460px] mt-5'>
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
      </div> */}
      <div className='mt-5 w-[460px] border flex justify-center rounded-lg py-4'>
        <input
          type='file'
          accept='public/avatar'
          onChange={(e) => filehandle(e)}
          value={file}
          alt=''
          placeholder=''
        />
        {/* <button className='border' onDrop={() => {}}>
          파일 업로드
        </button> */}
      </div>
      <button
        className='w-[28rem] border mt-5 rounded-md py-4 bg-green-600 text-white'
        onClick={() => signUp(email, password, userName)}
        disabled={isButtonDisabled}
      >
        회원가입
      </button>
    </div>
  );
}
