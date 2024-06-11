'use server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const getCookies = () => {
  const jwtData = jwt.decode(cookies().get('test')?.value ?? '');

  console.log(jwtData?.search('id'));
  console.log(jwt.decode(cookies().get('test')?.value ?? ''));
};

export { getCookies };
