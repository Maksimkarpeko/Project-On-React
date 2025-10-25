import { type FC } from 'react';

import { activeLike, inActiveLike } from 'assets/index';
import { useAddLike, useAllPost, useDeleteLike } from 'store/post/usePostStore';

import type { LikeProps } from './type';

export const Like: FC<LikeProps> = ({ postId }) => {
  const posts = useAllPost();
  const addLike = useAddLike();
  const deleteLike = useDeleteLike();
  const post = posts.find((item) => item.id === postId);
  const handleLike = (postId: number) => (!post?.isLiked ? addLike(postId) : deleteLike(postId));
  return (
    <div className="flex">
      <div className="mr-1">
        <img
          src={post?.isLiked ? activeLike : inActiveLike}
          alt="like"
          width={'20px'}
          className="mb-2 hover:cursor-pointer"
          onClick={() => {
            handleLike(postId);
          }}
        />
      </div>
      <span className="block mr-3">{post?._count.likes}</span>
    </div>
  );
};
