import type { FC } from 'react';

import { ActiveLike, Like, comment } from 'assets/index';

import type { postProps } from './type';

export const Post: FC<postProps> = ({
  content,
  img,
  username,
  isLike,
  countComment = 0,
  countLike = 0,
  onClickComment,
  onClickLike,
}) => {
  return (
    <div className=" max-w-md mx-auto mb-6 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img src={img} alt="postImg" width={'80%'} className="w-full h-64 object-cover" />
      <div className="p-4">
        <div className="flex">
          <div className="flex">
            <div className="mr-1">
              <img
                src={isLike ? ActiveLike : Like}
                alt="like"
                width={'20px'}
                className="mb-2 hover:cursor-pointer"
                onClick={onClickLike}
              />
            </div>
            <span className="block mr-3">{countLike}</span>
          </div>
          <div className="flex">
            <div className="mr-1">
              <img src={comment} alt="comment" width={'20px'} className="hover:cursor-pointer" onClick={onClickComment}/>
            </div>
            <span className="block">{countComment}</span>
          </div>
        </div>
        <div>
          <p className="text-gray-800 text-base">
            <span className="font-bold">{username}: </span>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
