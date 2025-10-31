import { postComment } from 'api/comments';
import { deleteLike, getAllPost, getPostById, putLike } from 'api/posts';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { InitialPostProps, PostStoreProps } from './type';

const initialStore: InitialPostProps = {
  posts: [],
  isLoading: false,
  error: '',
};

const usePostStore = create<PostStoreProps>()(
  devtools((set) => ({
    ...initialStore,
    fetchPosts: async () => {
      try {
        set({ isLoading: true });
        const posts = await getAllPost();
        set({ isLoading: false });
        set({ posts });
      } catch (error: unknown) {
        set({ isLoading: false });
        if (error instanceof Error) {
          set({ error: error.message });
        }
      }
    },
    addLikes: async (postId: number) => {
      const previousState = usePostStore.getState().posts;
      try {
        await putLike(postId);
        set((state) => ({
          posts: state.posts.map((item) =>
            item.id === postId
              ? {
                  ...item,
                  isLiked: true,
                  _count: {
                    ...item._count,
                    likes: item._count.likes + 1,
                  },
                }
              : item,
          ),
        }));
      } catch (error: unknown) {
        set({ posts: previousState });

        if (error instanceof Error && error.message === '409') {
          return;
        }
        if (error instanceof Error) {
          set({ error: error.message });
        }
      }
    },
    addComment: async (content: string, postId: number) => {
      try {
        await postComment(content, postId);
        set((state) => ({
          posts: state.posts.map((item) =>
            item.id === postId
              ? {
                  ...item,
                  _count: {
                    ...item._count,
                    comments: item._count.comments + 1,
                  },
                }
              : item,
          ),
        }));
      } catch (error: unknown) {
        if (error instanceof Error) {
          set({ error: error.message });
        }
      }
    },
    deleteLikes: async (postId: number) => {
      const previousState = usePostStore.getState().posts;
      try {
        await deleteLike(postId);
        set((state) => ({
          posts: state.posts.map((item) =>
            item.id === postId
              ? {
                  ...item,
                  isLiked: false,
                  _count: {
                    ...item._count,
                    likes: item._count.likes - 1,
                  },
                }
              : item,
          ),
        }));
      } catch (error: unknown) {
        set({ posts: previousState });

        if (error instanceof Error && error.message === '409') {
          return;
        }
        if (error instanceof Error) {
          set({ error: error.message });
        }
      }
    },
  })),
);

export const useAllPost = () => usePostStore((state) => state.posts);
export const useGetAllPost = () => usePostStore((state) => state.fetchPosts);
export const useIsLoading = () => usePostStore((state) => state.isLoading);
export const useErrorMassage = () => usePostStore((state) => state.error);
export const useAddLike = () => usePostStore((state) => state.addLikes);
export const useDeleteLike = () => usePostStore((state) => state.deleteLikes);
export const useAddComment = () => usePostStore((state) => state.addComment);
