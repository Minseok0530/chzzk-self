'use server';
import { cookies } from 'next/headers';
import jwt, { JwtPayload } from 'jsonwebtoken';

const getCookies = async () => {
  const jwtData = jwt.decode(cookies().get('test')?.value ?? '') as {
    id: string;
  };

  console.log(jwt.decode(cookies().get('test')?.value ?? ''));
  return jwtData == null ? '' : jwtData.id;
};

export { getCookies };
