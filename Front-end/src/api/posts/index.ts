import { AxiosError } from 'axios';
import { api } from 'utils/apiConfig';
import type { Posts } from 'utils/apiType';

export const getAllPost = async (): Promise<Posts[]> => {
  try {
    const post = await api.get('/posts');
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

export const putLike = async (postId: number) => {
  try {
    await api.post(`/likes/${postId}`);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 409) {
        throw new Error('409');
      } else {
        throw new Error('An incomprehensible error');
      }
    }
    throw new Error('problem with error');
  }
};

export const deleteLike = async (postId: number) => {
  try {
    await api.delete(`/likes/${postId}`);
  } catch (error) {
    throw new Error(String(error));
  }
};
