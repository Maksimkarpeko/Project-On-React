import { useState } from 'react';

import { createPost } from 'api/posts';
import { Button } from 'components/common/Button/Button';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { Size } from 'constants/size';
import { useFormik } from 'formik';

export const CreationPost = () => {
  const [apiMessage, setApiMessage] = useState<string>('');
  const formik = useFormik({
    initialValues: {
      text: '',
      file: '',
    },
    validate: (values) => {
      const errors: Partial<Record<string, string>> = {};
      if (!values.text.trim()) {
        errors.text = 'Введите текст поста';
      } else if (values.text.length < 3) {
        errors.text = 'Текст должен содержать минимум 3 символа';
      } else if (values.text.length > 500) {
        errors.text = 'Текст слишком длинный (максимум 500 символов)';
      }

      if (!values.file) {
        errors.file = 'Выберите файл';
      }
      return errors;
    },
    onSubmit: async (value) => {
      try {
        await createPost(value.text, value.file);
        setApiMessage('Post Created');
      } catch (e) {
        if (typeof e === 'string') {
          setApiMessage(e);
        }
      }
    },
  });
  return (
    <div className="m-auto mt-0">
      <h2 className="text-xl">Creation post</h2>
      <div>
        <Input
          name="text"
          placeholder="Name Post"
          type="text"
          variant={Variant.text}
          inputColor={Color.darkGray}
          className="border h-16 w-80 p-4 bg-gray-200 rounded-md mr-4"
          classname="mb-4"
          sizeInput={Size.S}
          value={formik.values['text']}
          onChange={(e) => {
            formik.setFieldValue('text', e.target.value);
          }}
        />
        <Input
          name="file"
          type="file"
          placeholder="File"
          value={formik.values['file']}
          variant={Variant.text}
          onChange={(e) => {
            formik.setFieldValue('file', e.target.value);
          }}
        />
        <Button type="button" classname="mt-3 ml-[60%]" onClick={() => formik.handleSubmit()}>
          Submit post
        </Button>
      </div>
      {apiMessage}
    </div>
  );
};
