import { api } from 'utils/apiConfig';

import type { singUpOptions } from './type';
import { CatchError } from 'utils/error';

export const signUp = async ({ email, username, password }: singUpOptions,setErrorApiMessage: (error:string) => void) => {
  try{
		const response = await api.post('/auth/sign-up',{
			email,
			username,
			password
		});
		localStorage.setItem('token',response.data.access_token)
	}catch(error:unknown){
		setErrorApiMessage(CatchError(error));
		throw CatchError(error);
	}
};
