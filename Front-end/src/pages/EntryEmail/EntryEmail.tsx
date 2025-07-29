import { Entry } from 'components/Entry/Entry';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { Links } from 'constants/links';
import { useFormik } from 'formik';
import { validateEmail } from './validateEmail';

export const EntryEmail = () => {
    const formik = useFormik({
        initialValues: {
        email: '',
        },
        validate: validateEmail,
        onSubmit: (value) => {
            console.log(value);
        },
    });
    const error = formik.errors.email;
    return (
        <>
        <Entry
            subTitle='Next step you will create password'
            title="What’s your email?"
            emailForm={formik}
            navigateLink={Links.entryPassword}
        >
            <Input
                name="email"
                placeholder="Email"
                type="email"
                variant={Variant.text}
                inputColor={Color.gray}
                value={formik.values.email}
                onChange={(e) => {
                    formik.setFieldValue('email', e.target.value);
                }}
            />
            {!formik.isValid && formik.errors.email && <div style={{ color: 'red' }}>{error}</div>}
        </Entry>
        </>
    );
};
