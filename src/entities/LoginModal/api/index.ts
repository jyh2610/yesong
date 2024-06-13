import request from '@/shared/APIs';

export const postLoginData = async ({
  id,
  password
}: {
  id: string;
  password: string;
}) => {
  const res = await request({
    method: 'POST',
    data: { username: id, password: password }
  });
  return res;
};
