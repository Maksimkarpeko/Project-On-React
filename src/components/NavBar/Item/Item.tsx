import type { FC } from 'react';

import clsx from 'clsx';

import type { ItemProps } from './type';

export const Item: FC<ItemProps> = ({
  img,
  classname,
  activeImg,
  alt,
  setPage,
  isActive,
  ...rest
}) => {
  const icon = isActive && activeImg ? activeImg : img;
  const baseStyle = 'pt-4 px-[20px] cursor-pointer w-[64px] h-[56px]';
  const activeStyle = 'border-l-2 border-blue-600 ';
  return (
    <button
      className={clsx(baseStyle, isActive ? activeStyle : '', classname)}
      onClick={() => {
        setPage?.(alt);
      }}
      aria-label={alt}
      aria-pressed={isActive}
    >
      <img src={icon} alt={alt} {...rest} />
    </button>
  );
};
