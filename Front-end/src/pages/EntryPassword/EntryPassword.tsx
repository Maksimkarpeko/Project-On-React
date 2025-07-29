import { Entry } from 'components/Entry/Entry';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { Links } from 'constants/links';
import { useFormik } from 'formik';
import { validatePassword } from './validatePassword';



export const EntryPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: validatePassword,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const error = formik.errors.password;
  return (
    <>
      <Entry
        subTitle="Please entry new password"
        title="Create sing password"
        passwordForm={formik}
        navigateLink={Links.entryUserName}
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
        {!formik.isValid && formik.errors.password && formik.errors.password && <div style={{ color: 'red' }}>{error}</div>}
      </Entry>
    </>
  );
};
