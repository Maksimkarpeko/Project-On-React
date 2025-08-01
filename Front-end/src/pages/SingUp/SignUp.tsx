import { useState } from 'react';

import { signUp } from 'api/singUp/singUp';
import { Entry } from 'components/Entry/Entry';
import { Error } from 'components/common/Error/Error';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { Links } from 'constants/links';
import { useFormik } from 'formik';

import { validate } from './validate';
import { useNavigate } from 'react-router-dom';

export const SingUp = () => {
  const navigate = useNavigate();
  const [errorApi, setErrorApi] = useState<boolean>(false);
  const [errorApiMessage, setErrorApiMessage] = useState<string>('');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },
    validate: validate,
    onSubmit: async (value) => {
      try {
        await signUp(
          {
            email: value.email,
            password: value.password,
            username: value.username,
          },setErrorApiMessage
        );
        setErrorApi(false);
        navigate(Links.entryBio)
      } catch(error) {
        setErrorApi(true);
      }
    },
  });
  const errorEmail = formik.errors.email;
  const errorPassword = formik.errors.password;
  const errorUserName = formik.errors.username;
  return (
    <Entry
      navigateLink={Links.entryBio}
      subTitle=""
      title="Create new account"
      formik={formik}
      errorApi={errorApi}
    >
      <Input
        name="email"
        placeholder="Email"
        type="email"
        variant={Variant.text}
        inputColor={Color.darkGray}
        value={formik.values.email}
        classname="mb-4"
        onBlur={formik.handleBlur}
        onChange={(e) => {
          formik.setFieldValue('email', e.target.value);
        }}
      />
      {formik.touched.email && formik.errors.email && (
        <Error errorMessage={errorEmail} />
      )}
      <Input
        name="password"
        placeholder="Password"
        type="password"
        classname="mb-4"
        variant={Variant.text}
        inputColor={Color.darkGray}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={(e) => {
          formik.setFieldValue('password', e.target.value);
        }}
      />
      {formik.touched.password && formik.errors.password && (
        <Error errorMessage={errorPassword} />
      )}
      <Input
        name="username"
        placeholder="Name"
        type="username"
        classname="mb-4"
        variant={Variant.text}
        inputColor={Color.darkGray}
        value={formik.values.username}
        onBlur={formik.handleBlur}
        onChange={(e) => {
          formik.setFieldValue('username', e.target.value);
        }}
      />
      {formik.touched.username && formik.errors.username && (
        <Error errorMessage={errorUserName} />
      )}

      {errorApi && <Error errorMessage={errorApiMessage}/>}
    </Entry>
  );
};
