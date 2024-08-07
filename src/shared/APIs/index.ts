import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { tokenController } from '../utils/tokenController';
import { postRefreshAuthToken, IGetTokenResponseData } from './getRefreshToken';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error(
    'BASE_URL is not defined. Please set NEXT_PUBLIC_BASE_URL in your environment variables.'
  );
}

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.request.use(async config => {
  const token = tokenController.getAccessToken();

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

const handleAxiosError = async (error: AxiosError) => {
  console.error('Axios error:', error);

  const originalRequest = error.config as CustomAxiosRequestConfig;

  if (error.response?.status === 401) {
    try {
      const refreshToken = tokenController.getRefreshToken();
      if (!refreshToken) tokenController.clearTokens();
      if (refreshToken) {
        // const response = await postRefreshAuthToken(refreshToken);
        // if (response) {
        //   tokenController.setAccessToken(response.accessToken);
        //   axiosInstance.defaults.headers.common['Authorization'] =
        //     `Bearer ${response.accessToken}`;
        //   originalRequest.headers = originalRequest.headers || {};
        //   originalRequest.headers['Authorization'] =
        //     `Bearer ${response.accessToken}`;
        // }
        return axiosInstance(originalRequest);
      }
    } catch (refreshError) {
      console.error('Token refresh error:', refreshError);
      tokenController.clearTokens();
      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(response => response, handleAxiosError);

const request = async <T>(
  param: CustomAxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return axiosInstance(param)
    .then((res: AxiosResponse<T>) => res)
    .catch(handleAxiosError);
};

export default request;
