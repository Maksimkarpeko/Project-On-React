import type { NavigateFunction } from 'react-router-dom';

import axios, { type AxiosError } from 'axios';
import { BASE_URL, Links } from 'constants/links';
import { api } from 'utils/api-сonfig';
import { CatchError } from 'utils/catch-error';

import type { AuthResponse, ErrorApiOptions, SignInOptions } from './type';
import type { SignUpOptions } from './type';

export const checkAuth = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/refresh`);
    localStorage.setItem('token', response.data.access_token);
  } catch (error: unknown) {
    CatchError(error);
    throw error;
  }
};

export const signIn = async (
  { email, password }: SignInOptions,
  setErrorApiMessage: ErrorApiOptions,
  navigate: NavigateFunction,
): Promise<AuthResponse> => {
  try {
    const emailLowerCase = email.toLowerCase();
    const response = await api.post('/auth/sign-in', {
      emailLowerCase,
      password,
    });
    if (!response?.data?.access_token) {
      throw new Error('access_token not found in the response');
    }
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh', response.data.refresh_token);
    navigate(Links.homePage);
    return response.data;
  } catch (error: unknown) {
    setErrorApiMessage.setErrorApiMessage(CatchError(error));
    throw error;
  }
};

export const signUp = async ({
  email,
  username,
  password,
}: SignUpOptions): Promise<AuthResponse> => {
  try {
    const emailLowerCase = email.toLowerCase();
    const response = await api.post('/auth/sign-up', {
      emailLowerCase,
      username,
      password,
    });
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh', response.data.refresh_token);
    return response.data;
  } catch (error: unknown) {
    if ((error as AxiosError).response?.status === 403) {
      throw new Error('Something went wrong');
    }
    throw new Error('The user has already been created');
  }
};
