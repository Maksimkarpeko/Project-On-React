import { type FC, useEffect, useState } from 'react';

import { comment } from 'assets/index';
import { useAllPost } from 'store/post/usePostStore';

import type { CommentProps } from './type';

export const CommentImg: FC<CommentProps> = ({ postId, onHandleOpen }) => {
  const posts = useAllPost();
  const post = posts.find((elem) => elem.id === postId);
  return (
    <div className="flex">
      <div className="mr-1">
        <img
          src={comment}
          alt="comment"
          width={'20px'}
          className="hover:cursor-pointer"
          onClick={onHandleOpen}
        />
      </div>
      <span className="block">{post?._count.comments}</span>
    </div>
  );
};
