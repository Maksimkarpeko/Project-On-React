import style from 'components/Button/button.module.scss';
import type { IButton } from 'types/components';

export const Button = ({
  text,
  className,
  img,
  type = 'button',
  onClick,
  loading = false,
  disabled = false,
}: IButton) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled || loading}>
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
