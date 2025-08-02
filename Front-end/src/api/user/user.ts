import { CatchError } from 'utils/catchError';
import { api } from 'utils/apiConfig';
import type { apiRespons, UserResponse } from 'api/user/type';
import type { AxiosResponse } from 'axios';
export const getUsers = async <T = UserResponse> (limit:number | null = 30, page:number = 1):Promise<{ users: T[]; total: number }> => {
	const skip = (page-1)*(limit ?? 0)
	try {
		const response:AxiosResponse<apiRespons<T>> = await api.get(`users?limit=${limit}&skip=${skip}`);
		const {users,total} = response.data;
		return {users, total}
	} catch (error:unknown) {
		CatchError(error);
		throw error
	}
};


export const getUserById = async (userId:number) =>{
	try {
		const response = await api.get(`users/${userId}`);
		return response.data;
	} catch (error:unknown) {
		CatchError(error)
		throw error
	}
}