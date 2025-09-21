export interface validateValue {
	email:string,
	password:string,
	username:string,
}

export interface validateSignInOptions {
	email: string; 
	password: string 
}

export interface validateBioOptions {
	firstName:string,
	lastName:string,
	avatar:File | string | null,
}