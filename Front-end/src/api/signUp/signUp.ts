import { api } from 'utils/apiConfig';

import type { SingUpOptions } from './type';
import { CatchError } from 'utils/catchError';
import axios from 'axios';

export const signUp = async ({ email, username, password }: SingUpOptions,setErrorApiMessage: (error:string) => void) => {
  try{
		const response = await api.post('/auth/sign-up',{
			email,
			username,
			password
		});
		return response.data
	}catch(error:unknown){
		setErrorApiMessage(CatchError(error));
		if(axios.isAxiosError(error) && error.response?.status === 403){
			throw new Error("The user has already been created");
		}
		throw error
	}
};
