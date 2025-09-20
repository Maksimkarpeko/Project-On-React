import * as Yup from 'yup';

const isValidDay = (years:number, months:number, day:number) =>{
  if (!years || !months || !day) return false;
  const data = new Date(years, months - 1,day);
  return data.getFullYear() === years && data.getMonth() === months - 1 && data.getDate() === day;
}
export const singUpSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .matches(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers and underscores are allowed'),
});

export const signInSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),

  password: Yup.string().required('Password is required'),
});

export const validateBio = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
});

export const EditProfileSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  about: Yup.string().required('About is required').min(20, 'About more than 20 letters'),
  country: Yup.string().required('Country is required'),
  address: Yup.string().required('Address is required'),
  location: Yup.string().required('Location is required'),
  userName: Yup.string().required('UserName is required'),
  day: Yup.number()
    .typeError("Day must be a number")
    .required('day is required')
    .test(
      "valid-day",
      function(value){
        const {months, years} = this.parent;
        return isValidDay(Number(years), Number(months), Number(value))
      }
    ),
  months: Yup.string().required('Month is required'),
  years: Yup.number()
    .typeError('Year must be a number')
    .required('Year is required')
    .min(1900, 'Year must be between 1900 and the current year')
    .max(new Date().getFullYear(), 'Year must be between 1900 and the current year'),
});
