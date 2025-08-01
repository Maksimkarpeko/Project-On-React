import axios, { type InternalAxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000',
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
    if (error.response.status === 401) {
      try{
        const refreshToken = await axios.post('http://localhost:8000/auth/refresh');
        localStorage.setItem('token', refreshToken.data.accessToken);
        return api.request(originalRequest);
      }catch(error){
        console.log(error);
      }
    }
  },
);
