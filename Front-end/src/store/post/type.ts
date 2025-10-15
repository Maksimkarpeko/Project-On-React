import type { posts } from 'utils/api-type';

export interface initialPostProps {
  posts: posts[];
  isLoading: boolean;
  error: Error | string;
}
interface postAction {
  fetchPosts: () => Promise<void>;
}

export interface postStoreProps extends initialPostProps, postAction {}
