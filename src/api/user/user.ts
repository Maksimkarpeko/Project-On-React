import { CatchError } from 'utils/error';
import { api } from 'utils/apiConfig';
import type { UserResponse } from 'api/user/type';

export const getAllUsers = async () => {
	try {
		const response = await api.get('users');
		const users = response.data.users as UserResponse[]
		return users;	
	} catch (error:unknown) {
		CatchError(error);
	}
};


export const fundUser = async (userId:number) =>{
	try {
		const response = await api.get(`users/${userId}`);
		console.log(response.data);
		return response.data;
	} catch (error:unknown) {
		CatchError(error)
	}
}