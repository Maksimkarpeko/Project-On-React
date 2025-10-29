import { type FC, useState } from 'react';

import { ModeForModal } from 'constants/mode';
import { useFetchCommentsById } from 'store/comment/useCommentStore';

import { CommentImg } from '../CommentImg/CommentImg';
import { CommentInput } from '../CommentInput/CommentInput';
import { CommentList } from '../CommentList/CommentList';
import { Like } from '../Like/Like';
import { Modal } from '../Modal/Modal';
import type { postProps } from './type';

export const Post: FC<postProps> = ({ content, img, username, countComment, postId }) => {
  const [isOpenComment, setIsOpenComment] = useState<boolean>(false);
  const fetchCommentsById = useFetchCommentsById();
  const openModal = async () => {
    fetchCommentsById(postId);
    setIsOpenComment(true);
  };
  const closeModal = () => {
    setIsOpenComment(false);
  };
  return (
    <>
      <div className=" max-w-md mx-auto mb-6 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <img src={img} alt="postImg" width={'80%'} className="w-full h-64 object-cover" />
        <div className="p-4">
          <div className="flex">
            <Like postId={postId} />
            <CommentImg countComment={countComment} onHandleOpen={openModal} />
          </div>
          <div>
            <p className="text-gray-800 text-base">
              <span className="font-bold">{username}: </span>
              {content}
            </p>
          </div>
        </div>
      </div>
      {isOpenComment && (
        <Modal mode={ModeForModal.comment} onHandelClose={closeModal}>
          <CommentList />
          <hr />
          <CommentInput postId={postId}/>
        </Modal>
      )}
    </>
  );
};
