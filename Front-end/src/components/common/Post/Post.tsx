import { type FC, useState } from 'react';

import { ModeForModal } from 'constants/mode';

import { Comment } from '../Comment/Comment';
import { Like } from '../Like/Like';
import { Modal } from '../Modal/Modal';
import type { postProps } from './type';
import { getComment } from 'api/comments';

export const Post: FC<postProps> = ({ content, img, username, countComment, postId }) => {
  const [isOpenComment, setIsOpenComment] = useState<boolean>(false);
  const openModal = async() => {
    const comment = await getComment(postId);
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
            <Comment countComment={countComment} onHandleOpen={openModal} />
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
          Comments
        </Modal>
      )}
    </>
  );
};
