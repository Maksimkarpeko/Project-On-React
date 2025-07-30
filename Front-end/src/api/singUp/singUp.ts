import { api } from 'utils/apiConfig';

import type { singUpOptions } from './type';

export const singUp = async ({ email, username, password }: singUpOptions) => {
  const respons = api.post('auth/sing-up',{
		email,
		username,
		password
	});
	console.log(respons);
};
