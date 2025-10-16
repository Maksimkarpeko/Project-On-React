import { getAllPost } from 'api/posts';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

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
