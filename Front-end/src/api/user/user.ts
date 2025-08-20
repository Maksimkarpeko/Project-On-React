import type { UserResponse, apiRespons } from 'api/user/type';
import type { AxiosResponse } from 'axios';
import { api } from 'utils/apiConfig';
import { CatchError } from 'utils/catchError';

import type { editUserForSingUpProps } from './type';

export const getUsers = async <T = UserResponse>(
  limit: number | null = 30,
  page: number = 2,
): Promise<{ users: T[]; total: number }> => {
  const skip = (page - 1);
  try {
    const response: AxiosResponse<apiRespons<T>> = await api.get(`/users`, {
      params: { page: skip, limit: limit },
    });
    const { data, total } = response.data;
    return { users:data, total };
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
    const response = await api.get("/users/me");
    return response.data;
  } catch (error:unknown) {
    CatchError(error);
    throw error
  }
}