import { CookieValueTypes } from 'cookies-next';
import { tokenController } from '../utils/tokenController';
import { axiosInstance } from '.';

export interface IGetTokenResponseData {
  accessToken: string;
}

export const postRefreshAuthToken = async (refreshToken: CookieValueTypes) => {
  try {
    const res = await axiosInstance.post<IGetTokenResponseData>('/api/token', {
      refreshToken
    });

    return res.data;
  } catch (err) {
    tokenController.clearTokens();
  }
};
