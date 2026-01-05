import { useAllComments } from 'store/comment/useCommentStore';
import { useErrorMassage, useIsLoading } from 'store/post/usePostStore';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Comment } from '../Comment/Comment';

export const CommentList = () => {
  const commentsList = useAllComments();
  const isLoading = useIsLoading();
  const errorMassage = useErrorMassage();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className='h-[420px] overflow-y-auto'>
      {commentsList.length ? (
        commentsList.map((item) => (
          <Comment content={item.content} name={item.user.username} key={item.id}/>
        ))
      ) : (
        <div>No comments</div>
      )}
      {errorMassage && <ErrorMessage errorMessage={errorMassage} />}
    </div>
  );
};
