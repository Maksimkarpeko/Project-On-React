import { type FC, useEffect, useState } from 'react';

import clsx from 'clsx';
import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage';
import { Post } from 'components/common/Post/Post';
import { useAllPost, useErrorMassage, useGetAllPost, useIsLoading } from 'store/post/usePostStore';

import type { chatPostsProps } from './type';

export const PostsList: FC<chatPostsProps> = ({ selectUser }) => {
  const [isOpenComment, setIsOpenComment] = useState<boolean>(false);
  const posts = useAllPost();
  const fetchAllPosts = useGetAllPost();
  const isLoading = useIsLoading();
  const chatErrorMassage = useErrorMassage();
  const postUser = posts.filter((item) => item.user?.username === selectUser);
  useEffect(() => {
    fetchAllPosts();
  }, []);
  if (isLoading) return <div>Loading...</div>;
  if (chatErrorMassage) return <ErrorMessage errorMessage={chatErrorMassage} />;

  return (
    <div className={clsx('lg:ml-[25%] sm:ml-[0%] ml-[25%]')}>
      {postUser.length ? (
        postUser.map((post) => (
          <Post
            key={post.id}
            content={post.content}
            img={post.image}
            username={post.user.username}
            isOpenComment={isOpenComment}
            postId={post.id}
            setIsOpenComment={setIsOpenComment}
          />
        ))
      ) : (
        <p>Without post</p>
      )}
    </div>
  );
};
