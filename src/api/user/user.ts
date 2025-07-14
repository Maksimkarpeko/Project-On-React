import { CatchError } from 'utils/error';
import { api } from 'utils/apiConfig';
import type { UserResponse } from 'api/user/type';

export const getAllUsers = async (page = 1, limit = 30) => {
	const skip = (page - 1)* limit;
	try {
		const response = await api.get(`users?limit=${limit}&skip=${skip}`);
		const users = response.data.users as UserResponse[]
		const total = response.data.total as number
		return {users,total};	
	} catch (error:unknown) {
		CatchError(error);
		throw error
	}
};


export const fundUser = async (userId:number) =>{
	try {
		const response = await api.get(`users/${userId}`);
		return response.data;
	} catch (error:unknown) {
		CatchError(error)
		throw error
	}
}