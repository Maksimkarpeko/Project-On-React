import { CatchError } from 'utils/catchError';
import { api } from 'utils/apiConfig';
import type { apiRespons, UserResponse } from 'api/user/type';
import type { AxiosResponse } from 'axios';
import type { editUserForSingUpProps } from "./type";
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




export const updateUserForSingUp = async ({firstName,lastName,img,setErrorApiMessage}:editUserForSingUpProps) =>{
    try{
        const formData = new FormData();

        formData.append("firstName",firstName);
        formData.append("lastName",lastName);
        const response = await api.patch('/users',formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        console.log(response.data);
        return response.data
    }
    catch(error:unknown){
        setErrorApiMessage(CatchError(error));
        throw error
    }

}