import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signIn } from 'api/auth';
import { AuthEntry } from 'components/AuthEntry/AuthEntry';
import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { useFormik } from 'formik';
import { signInSchema } from 'utils/validate';

export const SignIn = () => {
  const [errorApiMessage, setErrorApiMessage] = useState<string>('');
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (value) => {
      try {
        signIn(
          {
            email: value.email,
            password: value.password,
          },
          {setErrorApiMessage},
          navigate,
        );
      } catch {
        setErrorApiMessage('It just problem');
      }
    },
  });
  const errorEmail = formik.errors.email;
  const errorPassword = formik.errors.password;
  return (
    <AuthEntry title="Log in to your account" subTitle="" formikForSignIn={formik}>
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
        classname="mb-4"
        value={formik.values.password}
        variant={Variant.text}
        inputColor={Color.darkGray}
        onChange={(e) => {
          formik.setFieldValue('password', e.target.value);
        }}
      />
      {formik.touched.password && formik.errors.password && (
        <ErrorMessage errorMessage={errorPassword} />
      )}

      {errorApiMessage && <ErrorMessage errorMessage={errorApiMessage} />}
    </AuthEntry>
  );
};
