export interface SingInOptions {
    email:string,
    password:string,
}
export interface SingUpOptions {
	email:string,
	username:string,
	password:string,
}

export interface AuthResponse{
    refresh_Token:string,
    access_Token:string,
}