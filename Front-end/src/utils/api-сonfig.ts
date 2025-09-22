import axios, { type InternalAxiosRequestConfig } from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401) {
      try{
        const refreshToken = await axios.post(`${BASE_URL}/auth/refresh`,{
          refresh_token: localStorage.getItem("refresh")
        });
        localStorage.setItem('token', refreshToken.data.access_token);
        originalRequest.headers.Authorization = `Bearer ${refreshToken.data.access_token}`
        return api.request(originalRequest);
      }catch(error){
        console.log(error);
      }
    }
  },
);
