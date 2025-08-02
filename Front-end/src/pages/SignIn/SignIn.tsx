import { signIn } from 'api/signIn/signIn';
import { Entry } from 'components/Entry/Entry';
import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { Links } from 'constants/links';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const [errorApiMessage,setErrorApiMessage] = useState<string>('');
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors: { email?: string; password?: string } = {};

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      }

      return errors;
    },
    onSubmit: (value) => {
      try{
        signIn({
          email:value.email,
          password:value.password,
        },setErrorApiMessage)
        if(localStorage.getItem('token')){
          navigate(Links.homePage)
        }
      }
      catch{
        setErrorApiMessage("It just problem");
      }
    },
  });
  const errorEmail = formik.errors.email;
  const errorPassword = formik.errors.password;
  return (
    <Entry title="Log in to your account" subTitle="" formikForSingIn={formik} >
      <Input
        name="email"
        placeholder="email"
        type="email"
        variant={Variant.text}
        inputColor={Color.darkGray}
        value={formik.values.email}
        classname="mb-4"
        onChange={(e) => {
          formik.setFieldValue('email', e.target.value);
        }}
      />
      {formik.touched.email && formik.errors.email && <ErrorMessage errorMessage={errorEmail} />}
      <Input
        name="password"
        placeholder="password"
        type="password"
        classname='mb-4'
        value={formik.values.password}
        variant={Variant.text}
        inputColor={Color.darkGray}
        onChange={(e) => {
          formik.setFieldValue('password', e.target.value);
        }}
      />
      {formik.touched.password && formik.errors.password && <ErrorMessage errorMessage={errorPassword} />}

      {errorApiMessage && <ErrorMessage errorMessage={errorApiMessage}/>}
    </Entry>
  );
};
