export interface SignInOptions {
    email:string,
    password:string,
}
export interface SignUpOptions {
	email:string,
	username:string,
	password:string,
}

export interface AuthResponse{
    refresh_Token:string,
    access_Token:string,
}

export interface ErrorApiOptions {
    setErrorApiMessage: (error: string) => void
}