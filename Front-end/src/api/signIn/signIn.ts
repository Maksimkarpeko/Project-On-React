import{ api } from "utils/apiConfig"
import type { SingInOptions } from "./type";
import { CatchError } from "utils/catchError";

export const signIn =  async ({email,password}:SingInOptions, setErrorApiMessage:(error:string)=>void) =>{
    try{
        const response = await api.post('/auth/sign-in', {
            email,
            password
        })
        if (!response?.data?.access_token) {
            throw new Error('access_token не найден в ответе');
        }
        localStorage.setItem('token',response.data.access_token)
		localStorage.setItem('refresh', response.data.refresh_token);
        return response.data
    }
    catch(error:unknown){
       setErrorApiMessage(CatchError(error));
       throw error; 
    }
    
}