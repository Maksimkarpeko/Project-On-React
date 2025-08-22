import type { UserResponse, apiRespons, updateUserAuthProps } from 'api/user/type';
import type { AxiosResponse } from 'axios';
import { api } from 'utils/apiConfig';
import { CatchError } from 'utils/catchError';

import type { editUserForSingUpProps } from './type';
import { data } from 'react-router-dom';

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
  month,
  userName,
  year,
}: updateUserAuthProps) => {
  try {
    const data = day + month + year;
    const response = await api.patch('/users',{
      address,
      bio,
      birthday:data,
      firstName,
      lastName,
      location,
      userName,
    });
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    CatchError(error);
    throw error;
  }
};
