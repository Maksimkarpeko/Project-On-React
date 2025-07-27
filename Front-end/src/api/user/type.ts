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