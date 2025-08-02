export interface editUserForSingUpProps {
    firstName:string, 
    lastName:string,
    img:string|File | null,
    setErrorApiMessage: (error:string) => void
}