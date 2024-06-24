import { axiosInstance } from '.';

export interface IGetTokenResponseData {
  accessToken: string;
  refreshToken: string;
}

export const postRefreshAuthToken = async (refreshToken: string) => {
  try {
    const res = await axiosInstance.post<IGetTokenResponseData>('/api/token', {
      refreshToken
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};