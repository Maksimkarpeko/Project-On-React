import { type FC, useEffect } from 'react';

import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage';
import { Post } from 'components/common/Post/Post';
import { useAllPost, useErrorMassage, useGetAllPost, useIsLoading } from 'store/post/usePostStore';

import type { chatPostsProps } from './type';

export const ChatPosts: FC<chatPostsProps> = ({ selectUser }) => {
  const posts = useAllPost();
  const fetchAllPosts = useGetAllPost();
  const isLoading = useIsLoading();
  const chatErrorMassage = useErrorMassage();
  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);
  const postUser = posts.filter((item) => item.user?.username === selectUser);
  console.log(postUser);
  if (isLoading) return <div>Loading...</div>;
  if (chatErrorMassage) return <ErrorMessage errorMessage={chatErrorMassage} />;
  return (
    <div className="lg:ml-[50%] sm:ml-[0%] ml-[25%] ">
      {postUser.length > 0 ? (
        postUser.map((post) => (
          <Post key={post.id} content={post.content} img={post.image} />
        ))
      ) : (
        <p>Without post</p>
      )}
    </div>
  );
};
