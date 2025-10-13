import { useState } from 'react';

import { createPost } from 'api/posts';
import { Button } from 'components/common/Button/Button';
import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage';
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
      file: null,
    },
    validate: (values) => {
      const errors: Partial<Record<string, string>> = {};
      if (!values.text.trim()) {
        errors.text = 'Enter the text of the post';
      } else if (values.text.length < 3) {
        errors.text = 'The text must contain at least 3 characters.';
      } else if (values.text.length > 500) {
        errors.text = 'The text is too long (maximum 500 characters)';
      }

      if (!values.file) {
        errors.file = 'Select a file';
      } else {
        const file = values.file as File;
        const forbiddenExtensions = ['.svg'];
        const fileName = file.name.toLowerCase();
        if (forbiddenExtensions.some((ext) => fileName.endsWith(ext))) {
          errors.file = 'Uploading .svg files is not allowed';
        }
      }
      return errors;
    },
    onSubmit: async (value) => {
      setApiMessage('');
      try {
        await createPost(value.text, value.file);
        setApiMessage('Post Created');
      } catch (e) {
        if (e instanceof Error) {
          setApiMessage(e.message);
        }
      }
    },
  });
  const textError = formik.errors.text;
  const fileError = formik.errors.file;
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
        {textError && formik.touched.text && <ErrorMessage errorMessage={textError} />}
        <Input
          name="file"
          type="file"
          placeholder="File"
          variant={Variant.text}
          onChange={(e) => {
            formik.setFieldValue('file', e.currentTarget.files?.[0] || null);
          }}
        />
        {fileError && formik.touched.file && <ErrorMessage errorMessage={fileError} />}
        <Button type="button" classname="mt-3 ml-[60%]" onClick={() => formik.handleSubmit()}>
          Submit post
        </Button>
      </div>
      {apiMessage && (
        <ErrorMessage
          className={`${apiMessage === 'Post Created' ? 'text-green-500' : 'text-red-500'}`}
          errorMessage={apiMessage}
        />
      )}
    </div>
  );
};
