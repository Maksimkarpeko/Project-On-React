export interface postProps {
  content: string;
  img: string;
  username: string;
  postId: number;
  setIsOpenComment: (isOpen: boolean) => void;
  isOpenComment:boolean,
}
