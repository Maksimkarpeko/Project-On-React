import type { FC } from 'react';

import clsx from 'clsx';
import { ModeForModal } from 'constants/mode';

import type { ModalWindowProps } from './type';

export const Modal: FC<ModalWindowProps> = ({
  children,
  classname,
  onHandelClose,
  mode,
  ...rest
}) => {
  const modeModal = clsx({
    'fixed top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 bg-slate-500 rounded text-white text-center ':
      mode === ModeForModal.massage,
    'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm':
      mode === ModeForModal.comment,
  });
  return (
    <div className={clsx(modeModal, classname)} {...rest}>
      <div
        className={clsx(
          mode === ModeForModal.comment
            ? 'bg-white rounded-2xl shadow-2xl overflow-hidden w-[80%] h-[80%]'
            : '',
        )}
      >
        {mode === ModeForModal.comment && (
          <button
            onClick={onHandelClose}
            className="absolute text-xl top-[12%] right-[11%] text-gray-500 hover:text-gray-800 transition"
            aria-label="Закрыть"
          >
            X
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
