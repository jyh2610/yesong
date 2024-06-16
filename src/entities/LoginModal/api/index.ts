import { IPostRes } from '@/shared';
import request from '@/shared/APIs';

export const postLoginData = async ({
  id,
  password
}: {
  id: string;
  password: string;
}) => {
  const res = await request<IPostRes>({
    method: 'POST',
    url: '/api/login',
    data: { username: id, password: password }
  });
  return res.data;
};
