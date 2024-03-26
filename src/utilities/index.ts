import axios, { InternalAxiosRequestConfig } from 'axios';

export const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

export const authInterceptor = (req: InternalAxiosRequestConfig) => {
  const username = import.meta.env.VITE_APP_API_USER;
  const password = import.meta.env.VITE_APP_API_PASS;
  const storageName = import.meta.env.VITE_APP_USER_STORAGE || 'tg-mini-app-user';
  const storageData = localStorage?.getItem(storageName);
  if (!storageData) return req;
  const dataParsed = JSON.parse(storageData);
  const user = dataParsed?.state?.user?.displayName; 
  
  if (user) {
    req.headers['Authorization'] = 'Basic ' + btoa(username + ":" + password);
  }

  return req;
};

export const isTelegramApp = (tg: IWebApp): boolean => {
  return tg?.initData.length > 0;
}