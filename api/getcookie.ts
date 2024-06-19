'use server';
import { cookies } from 'next/headers';
import jwt, { JwtPayload } from 'jsonwebtoken';
import supabase from './supabase';
import { Tables } from '../supabase';

const getCookies = async () => {
  const jwtData = jwt.decode(cookies().get('test')?.value ?? '') as {
    id: string;
  };
  const { data } = await supabase
    .from('user_table')
    .select('*')
    .eq('user_name', jwtData.id)
    .returns<Tables<'user_table'>[]>();
  const datas = data?.find((o) => {
    if (o.user_name === jwtData.id) return o;
  });
  console.log(jwtData, datas);
  if (datas) return { name: jwtData == null ? '' : jwtData.id, id: datas.id };
};

const deleteCookies = async () => {
  cookies().delete('test');
};

export { getCookies, deleteCookies };
