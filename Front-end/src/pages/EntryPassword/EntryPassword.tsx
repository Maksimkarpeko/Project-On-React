import { Entry } from 'components/Entry/Entry';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { Links } from 'constants/links';
import { useFormik } from 'formik';

export const EntryPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: (value) => {
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
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const error = formik.errors.password;
  return (
    <>
      <Entry
        text="Pleas entry new password"
        title="Create sing password"
				formikPassword={formik}
        navigateLink={Links.homePage}
      >
        <Input
          name="password"
          placeholder="Password"
          type="password"
          variant={Variant.text}
          inputColor={Color.gray}
          value={formik.values.password}
          onChange={(e) => {
            formik.setFieldValue('password', e.target.value);
          }}
        />
        {!formik.isValid && <div style={{ color: 'red' }}>{error}</div>}
      </Entry>
    </>
  );
};
