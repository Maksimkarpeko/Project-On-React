import type { Posts } from 'utils/apiType';

export interface InitialPostProps {
  posts: Posts[];
  isLoading: boolean;
  error: Error | string;
}
interface PostAction {
  fetchPosts: () => Promise<void>;
}

export interface PostStoreProps extends InitialPostProps, PostAction {}
