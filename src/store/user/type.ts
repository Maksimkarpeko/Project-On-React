import type { UserResponse } from 'api/user/type';


export interface storeState{
	users:UserResponse[];
	isLoading:boolean;
	user:UserResponse|null;
	total:number | null
}
interface storeAction{
	fetchUsers: (limit:number)=>Promise<void>
	fetchOneUser:(id:number) => Promise<void>
}

export interface IInitialState extends storeState,storeAction{};