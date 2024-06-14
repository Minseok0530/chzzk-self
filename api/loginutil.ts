'use server';
import { cookies } from 'next/headers';
import jwt, { JwtPayload } from 'jsonwebtoken';
import supabase from './supabase';
import { Tables } from '../supabase';

const secret = process.env.JWT_SECRET!;
const loginUtil = async (user_Name: string, password: string) => {
  console.log('Active');
  const { data } = await supabase
    .from('user_table')
    .select('*')
    .match({
      user_name: user_Name,
      user_password: password,
    })
    .returns<Tables<'user_table'>>();

  const userData = jwt.sign({ id: user_Name }, secret, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  if (data === null) {
    cookies().set('test', '');
    return false;
  } else {
    cookies().set('test', userData);
    return true;
  }
};

export { loginUtil };