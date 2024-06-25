'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import supabase from '../api/supabase';
import { getCookies } from '../api/getcookie';

const Uploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [fileName, setFileName] = useState('');
  const [userId, setUserId] = useState(0);
  useEffect(() => {
    async function setUser() {
      const jwtData = await getCookies();
      if (jwtData) setUserId(jwtData.id);
    }
    setUser();
  }, []);
  function saveFile(e: ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  }
  function changeName(e: ChangeEvent<HTMLInputElement>) {
    const filesName = e.target.value;
    setFileName(filesName);
  }

  async function fileUpload() {
    if (!file) {
      alert('파일을 선택해주세요.');
      return;
    }
    try {
      setUploading(true);
      setMessage('');

      const fileExt = file.name.split('.').pop();
      console.log(file);
      console.log(fileName);
      const { error, data } = await supabase.storage
        .from('Videos')
        .upload(`public/${fileName}`, file);

      if (error) throw error;

      const { data: urlData } = await supabase.storage
        .from('Videos')
        .getPublicUrl(`public/${fileName}`);
      console.log(userId);
      setMessage('업로드가 완료되었습니다.');
      await supabase.from('uploadVideo').insert({
        user_id: userId,
        video_name: fileName,
        publicUrl: urlData.publicUrl,
      });
    } catch (error) {
      console.error(error);
      setMessage('에러가 발생했습니다.');
    } finally {
      setUploading(false);
    }
  }
  if (!userId) return;
  else
    return (
      <div>
        <input type='file' onChange={saveFile} />
        <input type='text' onChange={changeName} className='text-black' />
        <button
          className='border bg-white text-zinc-950'
          onClick={fileUpload}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {message && <p>{message}</p>}
      </div>
    );
};
export default Uploader;
