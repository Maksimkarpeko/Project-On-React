import { type ChangeEvent, useState } from 'react';

import { createPost } from 'api/posts';
import { Button } from 'components/common/Button/Button';
import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage';
import { Input } from 'components/common/Input/Input';
import { Variant } from 'components/common/Input/constant';
import { useFormik } from 'formik';

export const CreationPost = () => {
  const [apiMessage, setApiMessage] = useState<string>('');
  const [previousImage, setPreviousImage] = useState<string | null>('');

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0] || null;
    formik.setFieldValue('file', event.currentTarget.files?.[0] || null);
    setPreviousImage(formik.values.file);
    if (file) {
      setPreviousImage(URL.createObjectURL(file));
    } else {
      setPreviousImage(null);
    }
  };
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
    <div className="m-auto mt-0 w-[50%]">
      <div>
        <h2 className="text-xl mt-3 font-bold">Upload an image</h2>
        <div className="flex items-center justify-center w-full mt-5">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-200 "
          >
            {previousImage ? (
              <img
                src={previousImage}
                alt="Upload an image"
                className="object-contain w-full h-full rounded-lg"
              ></img>
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF</p>
              </div>
            )}
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(event) => {
                handleChangeFile(event);
              }}
            />
          </label>
        </div>
        <div>
          <h2 className="text-xl mt-3 font-bold">Write content</h2>
          <Input
            name="text"
            placeholder="You content"
            type="text"
            variant={Variant.text}
            className="w-[100%] bg-gray-100 mt-4 p-3 rounded-xl h-20"
            value={formik.values.text}
            onChange={(event) => {
              formik.setFieldValue('text', event.target.value);
            }}
          />
          {fileError && formik.touched.file && <ErrorMessage errorMessage={fileError} />}
          <Button type="button" classname="mt-3 ml-[84%]" onClick={() => formik.handleSubmit()}>
            Submit post
          </Button>
          {textError && formik.touched.text && <ErrorMessage errorMessage={textError} />}
        </div>
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
