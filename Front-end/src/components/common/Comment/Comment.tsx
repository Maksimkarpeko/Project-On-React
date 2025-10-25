import { useState, type FC } from 'react';

import { comment } from 'assets/index';

import type { CommentProps } from './type';

export const Comment: FC<CommentProps> = ({ countComment,onHandleOpen}) => {
  return (
    <div className="flex">
      <div className="mr-1">
        <img src={comment} alt="comment" width={'20px'} className="hover:cursor-pointer" onClick={onHandleOpen} />
      </div>
      <span className="block">{countComment}</span>
    </div>
  );
};
