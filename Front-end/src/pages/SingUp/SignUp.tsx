import { Entry } from 'components/Entry/Entry';
import { Input } from 'components/common/Input/Input';
import { Links } from 'constants/links';
import { useFormik } from 'formik';

import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { validate } from './validate';

export const SingUp = () => {
	const formik = useFormik({
		initialValues:{
			email:'',
			password:'',
			username:'',
		},
		validate:validate,
		onSubmit:(value)=>{
			console.log(value);
		}
	})
	const errorEmail = formik.errors.email;
	const errorPassword = formik.errors.password;
	const errorUserName = formik.errors.username;
  return (
    <Entry navigateLink={Links.entryBio} subTitle="" title="Create new account" >
      <Input
        name="email"
        placeholder="Email"
        type="email"
        variant={Variant.text}
        inputColor={Color.gray}
        value={formik.values.email}
				classname='mb-2'
        onChange={(e) => {
          formik.setFieldValue('email', e.target.value);
        }}
      />
      {formik.errors.email && <div style={{ color: 'red' }}>{errorEmail}</div>}
      <Input
        name="password"
        placeholder="Password"
        type="password"
				classname='mb-2'
        variant={Variant.text}
        inputColor={Color.gray}
        value={formik.values.password}
        onChange={(e) => {
          formik.setFieldValue('password', e.target.value);
        }}
      />
      {formik.errors.password && (
        <div style={{ color: 'red' }}>{errorPassword}</div>
      )}
      <Input
        name="name"
        placeholder="Name"
        type="name"
				classname='mb-2'
        variant={Variant.text}
        inputColor={Color.gray}
        value={formik.values.username}
        onChange={(e) => {
          formik.setFieldValue('username', e.target.value);
        }}
      />
      {!formik.isValid && formik.errors.username && (
        <div style={{ color: 'red' }}>{errorUserName}</div>
      )}
    </Entry>
  );
};
