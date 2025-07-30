import type { validateValue } from './type';

export const validate = (value: validateValue) => {
  const errors: Partial<typeof value> = {};
  if (!value.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
    errors.email = 'Invalid email format';
  }

  if (!value.password) {
    errors.password = 'Password is required';
  } else if (value.password.length < 5) {
    errors.password = 'Password must be at least 5 characters long';
  } else if (!/[A-Z]/.test(value.password)) {
    errors.password = 'Password must contain at least one uppercase letter';
  } else if (!/[a-z]/.test(value.password)) {
    errors.password = 'Password must contain at least one lowercase letter';
  } else if (!/[0-9]/.test(value.password)) {
    errors.password = 'Password must contain at least one number';
  }
  if (!value.username) {
    errors.username = 'Username is required';
  } else if (value.username.length < 3) {
    errors.username = 'Username must be at least 3 characters';
  } else if (!/^[a-zA-Z0-9_]+$/.test(value.username)) {
    errors.username = 'Only letters, numbers and underscores are allowed';
  }

  return errors;
};
