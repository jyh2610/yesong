import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { tokenController } from '../utils/tokenController';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error(
    'BASE_URL is not defined. Please set NEXT_PUBLIC_BASE_URL in your environment variables.'
  );
}

const axiosInstance = axios.create({ baseURL: BASE_URL });

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

const handleAxiosError = (error: AxiosError) => {
  console.error('Axios error:', error);
  if (error.response?.status === 401) {
    console.warn('Unauthorized access - 401');
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(res => res, handleAxiosError);

const request = async <T>(
  param: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return axiosInstance({
    ...param
  })
    .then((res: AxiosResponse<T>) => res)
    .catch(handleAxiosError);
};

export default request;
