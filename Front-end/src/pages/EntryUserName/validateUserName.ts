export const validateUserName = (value:{username:string}) =>{
	const errors:Partial<typeof value> = {};
	if (!value.username) {
		errors.username = 'Username is required';
	} else if (value.username.length < 3) {
		errors.username = 'Username must be at least 3 characters';
	} else if (!/^[a-zA-Z0-9_]+$/.test(value.username)) {
		errors.username = 'Only letters, numbers and underscores are allowed';
	} 
	return errors;
}