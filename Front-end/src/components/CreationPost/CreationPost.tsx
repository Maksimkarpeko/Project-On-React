import { createPost } from 'api/posts';
import { Button } from 'components/common/Button/Button';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { Size } from 'constants/size';
import { useFormik } from 'formik';
import { useState } from 'react';

export const CreationPost = () => {
  const [apiMessage, setApiMessage] = useState<string>('');
  const formik = useFormik({
    initialValues: {
      text: '',
      file: '',
    },
    onSubmit: (value) => {
      try{
        createPost(
            value.text,
            value.file
        )
        setApiMessage("Post Created")
      }catch(e) {
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
