import type { UserResponse, apiResponse, updateUserAuthProps } from 'api/user/type';
import type { AxiosResponse } from 'axios';
import { api } from 'utils/api-сonfig';
import { ShowError } from 'utils/show-error';
import type { editUserForSingUpProps } from './type';

export const getUsers = async (
  limit: number = 30,
  page: number = 2,
): Promise<{ users: UserResponse[]; total: number }> => {
  const skip = page - 1;
  try {
    const response: AxiosResponse<apiResponse> = await api.get(`/users`, {
      params: { page: skip, limit: limit },
    });
    const { data, total } = response.data;
    return { users: data, total };
  } catch (error: unknown) {
    ShowError(error);
    throw new Error(String(error));
  }
};

export const getUserById = async (userName: string) => {
  try {
    const response = await api.get(`/users/${userName}`);
    return response.data;
  } catch (error: unknown) {
    ShowError(error);
    throw new Error(String(error));
  }
};

export const updateUserForSingUp = async ({ firstName, lastName, img }: editUserForSingUpProps) => {
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
    ShowError(error);
    throw new Error(String(error));
  }
};

export const getInfoAuth = async () => {
  try {
    const response = await api.get('/users/me');
    return response.data;
  } catch (error: unknown) {
    ShowError(error);
    throw new Error(String(error));
  }
};

export const updateUserAuth = async (payload: updateUserAuthProps) => {
  try {
    const dayStr = String(payload.day).padStart(2, '0');
    const data = new Date(`${payload.years}-${payload.month}-${dayStr}T00:00:00.000Z`);
    const dataSend = {
      ...payload,
      data
    }
    const response = await api.patch('/users', dataSend);
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    ShowError(error);
    throw error;
  }
};
