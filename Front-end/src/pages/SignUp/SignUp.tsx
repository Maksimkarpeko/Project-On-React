import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signUp } from 'api/auth';
import { AuthEntry } from 'components/AuthEntry/AuthEntry';
import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { Links } from 'constants/links';
import { useFormik } from 'formik';
import { singUpSchema } from 'utils/validate';

export const SignUp = () => {
  const navigate = useNavigate();
  const [errorApi, setErrorApi] = useState<boolean>(false);
  const [errorApiMessage, setErrorApiMessage] = useState<string>('');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },
    validationSchema: singUpSchema,
    onSubmit: async (value) => {
      try {
        await signUp(
          {
            email: value.email,
            password: value.password,
            username: value.username,
          }
        );
        setErrorApi(false);
        navigate(Links.entryBio);
      } catch (error:unknown) {
        if (error instanceof Error) {
          setErrorApiMessage(error.message);
        }
        setErrorApi(true);
      }
    },
  });
  const errorEmail = formik.errors.email;
  const errorPassword = formik.errors.password;
  const errorUserName = formik.errors.username;
  return (
    <AuthEntry subTitle="" title="Create new account" formikForSignUp={formik} errorApi={errorApi}>
      <Input
        name="email"
        placeholder="Email"
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
        placeholder="Password"
        type="password"
        classname="mb-4"
        variant={Variant.text}
        inputColor={Color.darkGray}
        value={formik.values.password}
        onChange={(e) => {
          formik.setFieldValue('password', e.target.value);
        }}
      />
      {formik.touched.password && formik.errors.password && (
        <ErrorMessage errorMessage={errorPassword} />
      )}
      <Input
        name="username"
        placeholder="Name"
        type="username"
        classname="mb-4"
        variant={Variant.text}
        inputColor={Color.darkGray}
        value={formik.values.username}
        onChange={(e) => {
          formik.setFieldValue('username', e.target.value);
        }}
      />
      {formik.touched.username && formik.errors.username && (
        <ErrorMessage errorMessage={errorUserName} />
      )}
      {errorApi && <ErrorMessage errorMessage={errorApiMessage} />}
    </AuthEntry>
  );
};
