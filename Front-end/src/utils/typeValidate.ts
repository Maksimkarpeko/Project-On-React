export interface ValidateValue {
	email:string,
	password:string,
	username:string,
}

export interface ValidateSignInOptions {
	email: string; 
	password: string 
}

export interface ValidateBioOptions {
	firstName:string,
	lastName:string,
	avatar:File | string | null,
}