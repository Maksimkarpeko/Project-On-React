import type { FC } from 'react';

import type { IButton } from 'types/components';

import style from './buttonLoading.module.scss';

export const ButtonLoading: FC<IButton> = ({
  loading = false,
  text,
  className,
  img,
  type = 'button',
  onClick,
  disabled,
}) => {
  return (
    <>
      {loading ? (
        <button className={className}>
          <div className={style.loading} />
        </button>
      ) : (
        <button type={type} className={className} onClick={onClick} disabled={loading || disabled}>
          {img && <img src={img} alt="img" aria-hidden="true" />}
          <span>{text}</span>
        </button>
      )}
    </>
  );
};
