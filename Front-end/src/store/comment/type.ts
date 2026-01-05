import type { CommentsResponse } from 'utils/apiType';

export interface InitialCommentProps {
  comments: CommentsResponse[];
  isLoading: boolean;
  error: string;
}

interface StoreAction {
  fetchCommentsById: (postId: number) => Promise<void>;
  addComment: (content: string, postId: number) => Promise<void>;
}
export interface CommentsStoreProps extends InitialCommentProps, StoreAction {}
