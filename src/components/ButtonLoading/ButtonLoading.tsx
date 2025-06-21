import type { FC } from 'react';

import clsx from 'clsx';

import type { IButton } from './type/index';

export const Button: FC<IButton> = ({
  text,
  className,
  img,
  type = 'button',
  onClick,
  disabled,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={clsx('text-sm rounded-lg bg-blue-500 text-white px-6 py-3', className)}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {img && <img src={img} alt="img" aria-hidden="true" />}
      <span>{text}</span>
    </button>
  );
};
