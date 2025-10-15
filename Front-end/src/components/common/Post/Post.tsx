import type { FC } from 'react';

import type { postProps } from './type';

export const Post: FC<postProps> = ({ content, img }) => {
  return (
    <div className=" max-w-md mx-auto mb-6 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img src={img} alt="postImg" width={'80%'} className="w-full h-64 object-cover" />
      <div className="p-4">
        <p className="text-gray-800 text-base">{content}</p>
      </div>
    </div>
  );
};
