import axios from 'axios';
import { api } from 'utils/apiConfig';
import { CatchError } from 'utils/catchError';

import type { AuthResponse, SingInOptions } from './type';
import type { SingUpOptions } from './type';

export const checkAuth = async () => {
  try {
    const response = await axios.post('http://localhost:8000/auth/refresh');
    localStorage.setItem('token', response.data.access_token);
  } catch (error: unknown) {
    CatchError(error);
    throw error;
  }
};

export const signIn = async (
  { email, password }: SingInOptions,
  setErrorApiMessage: (error: string) => void,
):Promise<AuthResponse> => {
  try {
    const response = await api.post('/auth/sign-in', {
      email,
      password,
    });
    if (!response?.data?.access_token) {
      throw new Error('access_token не найден в ответе');
    }
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh', response.data.refresh_token);
    return response.data;
  } catch (error: unknown) {
    setErrorApiMessage(CatchError(error));
    throw error;
  }
};

export const signUp = async (
  { email, username, password }: SingUpOptions,
  setErrorApiMessage: (error: string) => void,
):Promise<AuthResponse> => {
  try {
    const response = await api.post('/auth/sign-up', {
      email,
      username,
      password,
    });
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh', response.data.refresh_token);
    return response.data;
  } catch (error: unknown) {
    setErrorApiMessage(CatchError(error));
    if (axios.isAxiosError(error) && error.response?.status === 403) {
      throw new Error('The user has already been created');
    }
    throw error;
  }
};
