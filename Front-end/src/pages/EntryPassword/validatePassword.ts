export const validatePassword = (value: { password: string }) => {
  const error: Partial<typeof value> = {};

  if (!value.password) {
    error.password = 'Password is required';
  } else if (value.password.length < 5) {
    error.password = 'Password must be at least 5 characters long';
  } else if (!/[A-Z]/.test(value.password)) {
    error.password = 'Password must contain at least one uppercase letter';
  } else if (!/[a-z]/.test(value.password)) {
    error.password = 'Password must contain at least one lowercase letter';
  } else if (!/[0-9]/.test(value.password)) {
    error.password = 'Password must contain at least one number';
  }

  return error;
};