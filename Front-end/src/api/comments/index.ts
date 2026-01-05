import { api } from 'utils/apiConfig';

export const getComment = async (id: number) => {
  try {
    const comment = await api.get('/comments', {
      params: {
        postId: id,
      },
    });
    return comment.data;
  } catch (error: unknown) {
    throw new Error(String(error));
  }
};

export const postComment = async (content: string, postId: number) => {
  try {
    const result = await api.post('/comments', {
      content,
      postId
    });
    return result.data;
  } catch (error: unknown) {
    throw new Error(String(error));
  }
};
