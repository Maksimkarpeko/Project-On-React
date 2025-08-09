export interface UserResponse {
	id:number,
	username:string,
	img:string,
	email:string,
	address:{
		country:string | null,
	}
}
export interface apiRespons<T> {
	data:T[],
	total:number,
}

export interface editUserForSingUpProps {
	firstName:string, 
	lastName:string,
	img:string | null,
	setErrorApiMessage: (error:string) => void
}