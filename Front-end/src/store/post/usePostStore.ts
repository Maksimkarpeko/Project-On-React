import { deleteLike, getAllPost, putLike } from 'api/posts';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { InitialPostProps, PostStoreProps } from './type';

const initialStore: InitialPostProps = {
  posts: [],
  isLoading: false,
  error: '',
};

const usePostStore = create<PostStoreProps>()(
  devtools(
    persist(
      (set) => ({
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
        postLikes: async (postId: number) => {
          const previousState = usePostStore.getState().posts;

          try {
            set((state) => ({
              posts: state.posts.map((item) =>
                item.id === postId
                  ? {
                      ...item,
                      isLike: true,
                      _count: {
                        ...item._count,
                        likes: item._count.likes + 1,
                      },
                    }
                  : item,
              ),
            }));
            await putLike(postId);
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
        deleteLikes: async (postId: number) => {
          const previousState = usePostStore.getState().posts;

          try {
            set((state) => ({
              posts: state.posts.map((item) =>
                item.id === postId
                  ? {
                      ...item,
                      isLike: false,
                      _count: {
                        ...item._count,
                        likes: item._count.likes - 1,
                      },
                    }
                  : item,
              ),
            }));
            await deleteLike(postId);
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
      }),
      {
        name: 'post-storage',
        partialize: (state) => ({
          posts: state.posts,
        }),
      },
    ),
  ),
);

export const useAllPost = () => usePostStore((state) => state.posts);
export const useGetAllPost = () => usePostStore((state) => state.fetchPosts);
export const useIsLoading = () => usePostStore((state) => state.isLoading);
export const useErrorMassage = () => usePostStore((state) => state.error);
export const usePostLike = () => usePostStore((state) => state.postLikes);
export const useDeleteLike = () => usePostStore((state) => state.deleteLikes);
