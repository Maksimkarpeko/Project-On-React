import { type FC, useEffect } from 'react';

import { Color } from 'constants/color';
import { Size } from 'constants/size';
import { useFormik } from 'formik';
import { useFetchCommentsById } from 'store/comment/useCommentStore';
import { useAddComment } from 'store/post/usePostStore';

import { Button } from '../Button/Button';
import { buttonSize } from '../Button/constant';
import { Input } from '../Input/Input';
import { Variant } from '../Input/constant';
import type { CommentInputProps } from './type';

export const CommentInput: FC<CommentInputProps> = ({ postId }) => {
  const addComment = useAddComment();
  const fetchCommentsById = useFetchCommentsById();
  const formik = useFormik({
    initialValues: {
      contextComment: '',
    },
    onSubmit: async (value, { resetForm }) => {
      await addComment(value.contextComment, postId);
      await fetchCommentsById(postId);
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
