import type { NavigateFunction } from 'react-router-dom';

import axios, { type AxiosError } from 'axios';
import { Links } from 'constants/links';
import { api } from 'utils/apiConfig';
import { ShowError } from 'utils/showError';

import type { AuthResponse, SignInOptions } from './type';
import type { SignUpOptions } from './type';

export const checkAuth = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/refresh`);
    localStorage.setItem('token', response.data.access_token);
  } catch (error: unknown) {
    ShowError(error);
    throw new Error(String(error));
  }
};

export const signIn = async (
  { email, password }: SignInOptions,
  navigate: NavigateFunction,
): Promise<AuthResponse> => {
  try {
    const response = await api.post('/auth/sign-in', {
      email,
      password,
    });
    if (!response?.data?.access_token) {
      throw new Error('access_token not found in the response');
    }
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh', response.data.refresh_token);
    navigate(Links.homePage);
    return response.data;
  } catch {
    throw new Error('The email or password is incorrect');
  }
};

export const signUp = async ({
  email,
  username,
  password,
}: SignUpOptions): Promise<AuthResponse> => {
  try {
    const response = await api.post('/auth/sign-up', {
      email,
      username,
      password,
    });
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh', response.data.refresh_token);
    return response.data;
  } catch {
    throw new Error('The user has already been created');
  }
};
