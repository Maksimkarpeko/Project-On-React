import { useRef, useState } from 'react';

import { defaultAvatar } from 'assets/index';
import { Entry } from 'components/Entry/Entry';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { useFormik } from 'formik';

export const EntryBio = () => {
  const refInput = useRef<HTMLInputElement | null>(null);
  const [previe, setPrevie] = useState<string | null>(null);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      avatar: null as string | null,
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue('avatar', file);
      setPrevie(URL.createObjectURL(file));
    }
  };
  const handleInput = () => {
    refInput.current?.click();
  };
  return (
    <>
      <Entry subTitle="Introduce yourself" title="New account" bioForm={formik}>
        <input
          type="file"
          name="avatar"
          accept="image/*"
          className="hidden"
          ref={refInput}
          onChange={handleFileChange}
        />
        <img
          src={previe || defaultAvatar}
          alt="avatar"
          className="cursor-pointer rounded-full"
          onClick={handleInput}
          width={'100px'}
        />
        <Input
          name="name"
          inputColor={Color.darkGray}
          type="name"
          placeholder="First name"
          variant={Variant.text}
          classname="my-4"
        />
        <Input
          name="name"
          inputColor={Color.darkGray}
          type="name"
          placeholder="Last name"
          variant={Variant.text}
        />
      </Entry>
    </>
  );
};
