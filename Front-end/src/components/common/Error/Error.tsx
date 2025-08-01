export const Error = ({errorMessage}:{errorMessage?:string}) =>{
	return(
		<div style={{color:"red"}}>
			{errorMessage}
		</div>
	)
}