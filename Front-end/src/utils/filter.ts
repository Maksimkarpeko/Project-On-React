import type { UserResponse } from "utils/apiType";

export const Filter = (users:UserResponse[],searchUser:string) =>{
    return users.filter((user) =>user.username.toLowerCase().includes(searchUser.toLowerCase()))
}