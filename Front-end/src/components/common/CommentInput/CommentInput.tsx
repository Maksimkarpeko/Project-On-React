import { Color } from 'constants/color';
import { Size } from 'constants/size';
import { useFormik } from 'formik';
import { useAddComment } from 'store/comment/useCommentStore';

import { Button } from '../Button/Button';
import { buttonSize } from '../Button/constant';
import { Input } from '../Input/Input';
import { Variant } from '../Input/constant';
import type { FC } from 'react';
import type { CommentInputProps } from './type';

export const CommentInput:FC<CommentInputProps> = ({postId}) => {
  const addComment = useAddComment();
  const formik = useFormik({
    initialValues: {
      contextComment: '',
    },
    onSubmit: (value, { resetForm }) => {
      addComment(value.contextComment, postId);
      resetForm();
    },
  });
  return (
    <div className="flex">
      <div className="mt-4 w-[100%]">
        <Input
          name="contextComment"
          placeholder="enter a comment"
          type="text"
          variant={Variant.text}
          inputColor={Color.gray}
          sizeInput={Size.S}
          classname=" pl-9"
          inputStyle="w-[90%]"
          value={formik.values.contextComment}
          onChange={(e) => {
            formik.setFieldValue('contextComment', e.target.value);
          }}
        />
      </div>
      <div className="pt-5 pr-5">
        <Button
          type="button"
          size={buttonSize.sizeXl}
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
