import type { FC } from 'react';

import clsx from 'clsx';

import type { ItemProps } from './type';

export const Item: FC<ItemProps> = ({ img, classname,activeImg, alt, setPage, isActive, ...rest }) => {
  const icon = isActive && activeImg ? activeImg : img
  return (
    <div
      className={clsx(
        'pt-4 px-[20px] cursor-pointer w-[64px] h-[56px]',
        isActive ? 'border-l-2 border-blue-600 ' : '',
        classname,
      )}
      onClick={() => {
        setPage?.(alt);
      }}
    >
      <img src={icon} alt={alt} {...rest} />
    </div>
  );
};
