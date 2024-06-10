'use server';
import { cookies } from 'next/headers';

const getCookies = () => {
  console.log(cookies().get('test'));
  fetch('', {
    headers: {
      test: '',
    },
  });
};

export { getCookies };
