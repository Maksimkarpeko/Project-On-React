import type { FC } from 'react';

import clsx from 'clsx';

import type { IButton } from './type';

export const Button: FC<IButton> = ({
  isPrimary,
  classNameButton,
  type = 'button',
  onClick,
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={clsx(
        'text-sm rounded-lg bg-blue-500 text-white px-6 py-3',
        isPrimary && 'bg-red-600',
        classNameButton,
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
