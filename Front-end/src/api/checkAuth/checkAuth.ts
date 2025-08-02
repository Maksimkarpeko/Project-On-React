import axios from "axios";
import { CatchError } from "utils/catchError"

export const checkAuth = async() => {
    try{
        const response = await axios.post("http://localhost:8000/auth/refresh")
        localStorage.setItem('token',response.data.access_token)
    }
    catch(error:unknown){
        CatchError(error);
        throw error
    }
}