import type { FC } from 'react';

import clsx from 'clsx';

import type { ItemProps } from './type';
import { Button } from '../Button/Button';

export const Item: FC<ItemProps> = ({
  img,
  classname,
  activeImg,
  alt,
  callback,
  isActive,
  ...rest
}) => {
  const icon = isActive && activeImg ? activeImg : img;
  const baseStyle = 'pt-4 px-[20px] cursor-pointer w-[64px] h-[56px]';
  const activeStyle = 'border-l-2 border-blue-600 ';
  return (
    <Button
      type='button'
      onClick={() =>{
        callback?.()
      }}
      aria-label={alt}
      aria-pressed={isActive}
      className={clsx(baseStyle,isActive ? activeStyle : '', classname)}
    >
      <img src={icon} alt={alt} {...rest} />
    </Button>
  );
};
