import { Entry } from 'components/Entry/Entry';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { Links } from 'constants/links';
import { useFormik } from 'formik';

export const EntryEmail = () => {
    const formik = useFormik({
        initialValues: {
        email: '',
        },
        validate: (value) => {
            const error: Partial<typeof value> = {};
            if (!value.email) {
                error.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
                error.email = 'Invalid email format';
            }
            return error;
        },
        onSubmit: (value) => {
            console.log(value);
        },
    });
    const error = formik.errors.email;
    return (
        <>
        <Entry
            text='We’ll send you a sign-in code'
            title="What’s your email?"
            formikEmail={formik}
            navigateLink={Links.entryEmailPassword}
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
            {!formik.isValid && <div style={{ color: 'red' }}>{error}</div>}
        </Entry>
        </>
    );
};
