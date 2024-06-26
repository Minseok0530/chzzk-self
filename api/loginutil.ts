'use server';
import { cookies } from 'next/headers';
import jwt, { JwtPayload } from 'jsonwebtoken';
import supabase from './supabase';
import { Tables } from '../supabase';

const secret = process.env.JWT_SECRET!;
const loginUtil = async (user_id: string, password: string) => {
  console.log('Active');
  const { data } = await supabase
    .from('user_table')
    .select('*')
    .eq('user_id', user_id)
    .eq('user_password', password)
    .returns<Tables<'user_table'>[]>();
  console.log(data);
  if (data?.length === 0) {
    console.log('error');
    cookies().set('test', '');
    return false;
  }
  const userData = jwt.sign({ id: data?.[0].user_name }, secret, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

  cookies().set('test', userData);
  return true;
};

export { loginUtil };
