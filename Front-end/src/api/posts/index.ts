import { api } from 'utils/api-сonfig';
import type { posts } from './type';

export const getAllPost = async ():Promise<posts[]> => {
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
        return post
    } catch (error:unknown) {
        throw new Error (String(error));
    }
};

export const createPost = async (content:string,img:string) => {
    try {
        const result = await api.post('/posts',{
            content,
            img,
        })
        return result;
    } catch (error:unknown) {
        throw new Error (String(error));
    }
}
