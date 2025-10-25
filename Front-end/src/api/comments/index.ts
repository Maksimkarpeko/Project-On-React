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
