import { useRef, useState } from 'react';

import { editUserForSingUp } from 'api/editUser/editUser';
import { defaultAvatar } from 'assets/index';
import { AuthEntry } from 'components/AuthEntry/AuthEntry';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { validateBio } from 'constants/validate';
import { useFormik } from 'formik';

export const EntryBio = () => {
  const refInput = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [errorApiMessage, setErrorApiMessage] = useState<string>('');
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      avatar: null as string | null,
    },
    validate: validateBio,
    onSubmit: (value) => {
      console.log(value);
      editUserForSingUp({
        firstName: value.firstName,
        lastName: value.lastName,
        img: value.avatar,
        setErrorApiMessage,
      });
    },
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue('avatar', file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  const handleInput = () => {
    refInput.current?.click();
  };
  return (
    <>
      <AuthEntry subTitle="Introduce yourself" title="New account" bioForm={formik}>
        <input
          type="file"
          name="avatar"
          accept="image/*"
          className="hidden"
          ref={refInput}
          onChange={handleFileChange}
        />
        <img
          src={previewUrl || defaultAvatar}
          alt="avatar"
          className="cursor-pointer rounded-full"
          onClick={handleInput}
          width={'100px'}
        />
        <Input
          name="firstname"
          inputColor={Color.darkGray}
          type="firstname"
          placeholder="First name"
          variant={Variant.text}
          value={formik.values.firstName}
          classname="my-4"
          onChange={(e) => {
            formik.setFieldValue('firstName', e.target.value);
          }}
        />
        <Input
          name="lastname"
          inputColor={Color.darkGray}
          type="lastname"
          placeholder="Last name"
          value={formik.values.lastName}
          variant={Variant.text}
          onChange={(e) => {
            formik.setFieldValue('lastName', e.target.value);
          }}
        />
      </AuthEntry>
    </>
  );
};
