import { Entry } from 'components/Entry/Entry';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { Links } from 'constants/links';
import { useFormik } from 'formik';

import { validateUserName } from './validateUserName';

export const EntryUserName = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validate: validateUserName,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const error = formik.errors.username;
  return (
    <>
      <Entry
        navigateLink={Links.entryBio}
        subTitle="Next step you entry fist name and last name"
        title="Entry you username"
        usernameForm={formik}
      >
        <Input
          name="name"
          placeholder="Name"
          type="name"
          variant={Variant.text}
          inputColor={Color.gray}
          value={formik.values.username}
          onChange={(e) => {
            formik.setFieldValue('username', e.target.value);
          }}
        />
        {!formik.isValid && formik.errors.username && formik.errors.username && (
          <div style={{ color: 'red' }}>{error}</div>
        )}
      </Entry>
    </>
  );
};
