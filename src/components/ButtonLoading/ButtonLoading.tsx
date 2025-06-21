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
	...rest
}) => {
  return (
    <button type={type} className={className} onClick={onClick} disabled={loading || disabled} {...rest}>
      {loading ? (
        <div className={style.loading} />
      ) : (
        <>
          {img && <img src={img} alt="img" aria-hidden="true" />}
          <span>{text}</span>
        </>
      )}
    </button>
  );
};
