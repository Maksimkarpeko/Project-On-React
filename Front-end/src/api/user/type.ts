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

export interface updateUserAuthProps {
	firstName:string,
	lastName:string,
	bio:string,
	location: string,
	address:string,
	username:string,
	day:number,
	month:string,
	years:number,
	setApiError: (error:string) => void,
	country:string,
}