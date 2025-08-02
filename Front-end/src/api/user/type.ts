export interface UserResponse {
	id:number,
	username:string,
	img:string,
	email:string,
	address:{
		country:string,
	}
}
export interface apiRespons<T> {
	users:T[],
	total:number,
}

export interface editUserForSingUpProps {
	firstName:string, 
	lastName:string,
	img:string|File | null,
	setErrorApiMessage: (error:string) => void
}