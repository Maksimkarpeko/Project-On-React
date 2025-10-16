import { api } from 'utils/apiConfig';
import type { Posts } from 'utils/apiType';

export const getAllPost = async (): Promise<Posts[]> => {
  try {
    const post = await api.get('/posts');
    console.log(post.data);
    return post.data;
  } catch (error: unknown) {
    throw new Error(String(error));
  }
};
export const getPostById = async (id: number) => {
  try {
    const post = await api.get(`/posts/${id}`);
    return post;
  } catch (error: unknown) {
    throw new Error(String(error));
  }
};

export const createPost = async (content: string, img: File | null) => {
  try {
    if (!img) throw new Error('Select a file before submitting');
    const formData = new FormData();
    formData.append('content', content);
    formData.append('image', img, img.name);
    const result = await api.post('/posts', formData);
    return result;
  } catch (error: unknown) {
    throw new Error(String(error));
  }
};
