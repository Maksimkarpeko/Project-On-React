import { getComment, postComment } from 'api/comments';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { CommentsStoreProps, InitialCommentProps } from './type';

const initialStore: InitialCommentProps = {
  comments: [],
  isLoading: false,
  error: '',
};

const useCommentStore = create<CommentsStoreProps>()(
  devtools((set) => ({
    ...initialStore,
    fetchCommentsById: async (postId: number) => {
      try {
        set({ isLoading: true });
        const comments = await getComment(postId);
        set({ isLoading: false });
        set({ comments });
      } catch (error: unknown) {
        set({ isLoading: false });
        if (error instanceof Error) {
          set({ error: error.message });
        }
      }
    },
    addComment: async (content: string, postId: number) => {
      try {
        await postComment(content, postId);
      } catch (error: unknown) {
        if (error instanceof Error) {
          set({ error: error.message });
        }
      }
    },
  })),
);

export const useFetchCommentsById = () => useCommentStore((state) => state.fetchCommentsById);
export const useAllComments = () => useCommentStore((state) => state.comments);
export const useLoading = () => useCommentStore((state) => state.isLoading);
export const useError = () => useCommentStore((state) => state.error);
export const useAddComment = () =>
  useCommentStore((state) => state.addComment);
