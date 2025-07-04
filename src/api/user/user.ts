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
