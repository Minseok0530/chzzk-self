'use server';
import { cookies } from 'next/headers';
import jwt, { JwtPayload } from 'jsonwebtoken';

const getCookies = async () => {
  const jwtData = jwt.decode(cookies().get('test')?.value ?? '') as {
    id: string;
  };
  return { id: jwtData == null ? '' : jwtData.id };
};

const deleteCookies = async () => {
  cookies().delete('test');
};

export { getCookies, deleteCookies };
