import type { UserResponse, apiRespons, updateUserAuthProps } from 'api/user/type';
import type { AxiosResponse } from 'axios';
import { api } from 'utils/api-сonfig';
import { CatchError } from 'utils/catch-error';

import type { editUserForSingUpProps } from './type';

export const getUsers = async <T = UserResponse>(
  limit: number | null = 30,
  page: number = 2,
): Promise<{ users: T[]; total: number }> => {
  const skip = page - 1;
  try {
    const response: AxiosResponse<apiRespons<T>> = await api.get(`/users`, {
      params: { page: skip, limit: limit },
    });
    const { data, total } = response.data;
    return { users: data, total };
  } catch (error: unknown) {
    CatchError(error);
    throw error;
  }
};

export const getUserById = async (userName: string) => {
  try {
    const response = await api.get(`/users/${userName}`);
    return response.data;
  } catch (error: unknown) {
    CatchError(error);
    throw error;
  }
};

export const updateUserForSingUp = async ({
  firstName,
  lastName,
  img,
  setErrorApiMessage,
}: editUserForSingUpProps) => {
  try {
    const formData = new FormData();

    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    if (img) {
      formData.append('image', img);
    }
    const response = await api.patch('/users', formData);
    return response.data;
  } catch (error: unknown) {
    setErrorApiMessage(CatchError(error));
    throw error;
  }
};

export const getInfoAuth = async () => {
  try {
    const response = await api.get('/users/me');
    return response.data;
  } catch (error: unknown) {
    CatchError(error);
    throw error;
  }
};

export const updateUserAuth = async ({
  address,
  bio,
  day,
  firstName,
  lastName,
  location,
  country,
  month,
  username,
  years,
  setApiError,
}: updateUserAuthProps) => {
  try {
    const dayStr = String(day).padStart(2, '0');
    const data = new Date(`${years}-${month}-${dayStr}T00:00:00.000Z`);
    const response = await api.patch('/users', {
      address,
      bio,
      birthday: data,
      firstName,
      lastName,
      location,
      username,
      country,
    });
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    setApiError(CatchError(error));
    throw error;
  }
};
