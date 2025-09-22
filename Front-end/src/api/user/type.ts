export interface UserResponse {
	id:number,
	username:string,
	img:string,
	email:string,
	country:string | null,
}
export interface apiResponse {
	data:UserResponse[],
	total:number,
}

export interface editUserForSingUpProps {
	firstName:string, 
	lastName:string,
	img:string | null,
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
	country:string,
}