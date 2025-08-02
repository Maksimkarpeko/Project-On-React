import { api } from "utils/apiConfig"
import { CatchError } from "utils/catchError"
import type { editUserForSingUpProps } from "./type";

export const editUserForSingUp = async ({firstName,lastName,img,setErrorApiMessage}:editUserForSingUpProps) =>{
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