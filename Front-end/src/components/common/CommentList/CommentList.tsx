import { useAllComments } from 'store/comment/useCommentStore';
import { useErrorMassage, useIsLoading } from 'store/post/usePostStore';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const CommentList = () => {
  const commentsList = useAllComments();
  const isLoading = useIsLoading();
  const errorMassage = useErrorMassage();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className='h-[420px]'>
      {commentsList.length ? (
        commentsList.map((item) => <div>{item.content}</div>)
      ) : (
        <div>No comments</div>
      )}
      {errorMassage && <ErrorMessage errorMessage={errorMassage} />}
    </div>
  );
};
