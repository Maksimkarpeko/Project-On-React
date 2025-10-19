import { type FC, useEffect } from 'react';

import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage';
import { Post } from 'components/common/Post/Post';
import {
  useAllPost,
  useDeleteLike,
  useErrorMassage,
  useGetAllPost,
  useIsLoading,
  usePostLike,
} from 'store/post/usePostStore';

import type { chatPostsProps } from './type';

export const ChatPosts: FC<chatPostsProps> = ({ selectUser }) => {
  const posts = useAllPost();
  const fetchAllPosts = useGetAllPost();
  const isLoading = useIsLoading();
  const chatErrorMassage = useErrorMassage();
  const postLike = usePostLike();
  const deleteLike = useDeleteLike();
  const postUser = posts.filter((item) => item.user?.username === selectUser);
  const handelLike = async (postId: number, isLike: boolean) => {
    try {
      if (!isLike) {
        await postLike(postId);
      } else {
        await deleteLike(postId);
      }
    } catch (error: unknown) {
      console.error('Error when liking/disliking:', error);
    }
  };
  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);
  if (isLoading) return <div>Loading...</div>;
  if (chatErrorMassage) return <ErrorMessage errorMessage={chatErrorMassage} />;

  return (
    <div className="lg:ml-[50%] sm:ml-[0%] ml-[25%] ">
      {postUser.length > 0 ? (
        postUser.map((post) => (
          <Post
            key={post.id}
            content={post.content}
            img={post.image}
            username={post.user.username}
            countComment={post._count.comments}
            countLike={post._count.likes}
            isLike={post.isLike}
            onClickLike={() => {
              handelLike(post.id, post.isLike);
            }}
          />
        ))
      ) : (
        <p>Without post</p>
      )}
    </div>
  );
};
