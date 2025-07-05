import type { UserResponse } from 'api/user/type';


export interface storeState{
	users:UserResponse[];
	isLoading:boolean;
	user:UserResponse|null;
}
interface storeAction{
	fetchUsers: ()=>Promise<void>
	fetchOneUser:(id:number) => Promise<void>
}

export interface IInitialState extends storeState,storeAction{};