import type { UserResponse } from "api/user/type";

export const Filter = (users:UserResponse[],searchUser:string) =>{
    return users.filter((user) =>user.username.toLowerCase().includes(searchUser.toLowerCase()))
}