export interface Posts {
  id: number;
  content: string;
  image: string;
  createAt: string;
  updateAt: string;
  userId: number;
  user: {
    username: string;
    image: string;
  };
  _count: {
    comments: number;
    likes: number;
  };
  isLiked: boolean;
  isEditable?: boolean;
  isUpdated?: boolean;
}

export interface UserResponse {
  id: number;
  username: string;
  img: string;
  email: string;
  country: string | null;
}
