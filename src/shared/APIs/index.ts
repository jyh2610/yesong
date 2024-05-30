import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const BASE_URL = process.env.REACT_APP_API_SERVER_URL;
export const refreshAxiosInstance = axios.create({ baseURL: BASE_URL });

const request = async <T>(params: AxiosRequestConfig) => {
  return axios({
    baseURL: BASE_URL,
    ...params
  }).then((res: AxiosResponse<T>) => res);
};
export default request;
