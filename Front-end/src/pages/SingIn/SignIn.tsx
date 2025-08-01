import { Entry } from 'components/Entry/Entry';
import { Error } from 'components/common/Error/Error';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { useFormik } from 'formik';

export const SingIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (value) => {
      const errors: Partial<typeof value> = {};
      if (!value.email) {
        errors.email = 'Entry email';
      }
      if (!value.password) {
        errors.password = 'Entry password';
      }
      return errors;
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const messageErrorEmail = formik.errors.email;
  const messageErrorPassword = formik.errors.password;
  return (
    <Entry title="Log in to your account" subTitle="" >
      <Input
        name="email"
        placeholder="email"
        type="email"
        variant={Variant.text}
        inputColor={Color.darkGray}
        classname="mb-5"
      />
      {formik.touched.email && formik.errors.email && <Error errorMessage={messageErrorEmail} />}
      <Input
        name="password"
        placeholder="password"
        type="password"
        variant={Variant.text}
        inputColor={Color.darkGray}
      />
      {formik.touched.email && formik.errors.email && <Error errorMessage={messageErrorPassword} />}
    </Entry>
  );
};
