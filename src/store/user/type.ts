import type { UserResponse } from 'api/user/type';


export interface storeState{
	user:UserResponse[];
	isLoading:boolean
}
interface storeAction{
	fetchUser: ()=>Promise<void>
}

export interface IInitialState extends storeState,storeAction{};