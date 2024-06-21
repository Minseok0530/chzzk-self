'use server';

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const secret = process.env.JWT_SECRET!;
const sign = (userId: string) => {
  console.log('sign Active');
  console.log(cookies().get('test'));
  const userData = jwt.sign({ id: userId }, secret, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  const cookieData = cookies().set('test', userData);
  return 0;
};
const verify = (token: string) => {
  let decoded: any = null;
  try {
    decoded = jwt.verify(token, secret);
    return {
      ok: true,
      userId: decoded.id,
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error.message,
    };
  }
};

const refresh = (userId: String) => {
  return jwt.sign({ id: userId }, secret, {
    algorithm: 'HS256',
    expiresIn: '3d',
  });
};

const refreshVerify = (token: string) => {
  try {
    jwt.verify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
};

export { sign, verify, refresh, refreshVerify };
