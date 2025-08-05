import type { UserResponse } from 'api/user/type';


export interface UserStoreState{
	users:UserResponse[];
	isLoading:boolean;
	user:UserResponse|null;
	total:number | null
}
interface UserStoreAction{
	fetchUsers: (limit:number|null,page:number)=>Promise<void>
	fetchOneUser:(userName:string) => Promise<void>
}

export interface UserStor extends UserStoreState,UserStoreAction{};