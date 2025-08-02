import { api } from "utils/apiConfig"
import { CatchError } from "utils/catchError"
import type { editUserForSingUpProps } from "./type";

export const editUserForSingUp = async ({firstName,lastName,img,setErrorApiMessage}:editUserForSingUpProps) =>{
    try{
        let data:FormData | editUserForSingUpProps = {
            firstName:"",
            lastName:"",
            img:null,
            setErrorApiMessage,
        };
        let headers = {};
        if (img instanceof File){
            data = new FormData();
            data.append("firstName",firstName);
            data.append("lastName",lastName);
            data.append("image",img);
            headers = { 'Content-Type': 'multipart/form-data' };
        }
        const response = await api.patch('/users',data,headers);
        console.log(response.data);
        return response.data;
    }
    catch(error:unknown){
        setErrorApiMessage(CatchError(error));
        throw error
    }

}