import { useState, type FC } from 'react';

import clsx from 'clsx';

import { Size } from './constants';
import type { AvatarsProps } from './type';
import { IconError } from 'assets/index';

export const Avatars: FC<AvatarsProps> = ({ img, alt, classname, size, isOnline, ...rest }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const sizeStyle = clsx({
    'w-6': size == Size.xSmall,
    'w-8': size == Size.Small,
    'w-10': size == Size.Medium,
    'w-14': size == Size.Large,
    'w-[72px]': size == Size.xLarge,
    'w-24': size == Size.xxLarge,
  });
  const sizeOnline = clsx({
    'left-6 top-6  w-2 h-2': size == Size.Small,
    'left-[30px] top-[30px]  w-2 h-2': size == Size.Medium,
    'left-[42px] top-[42px]  w-3 h-3': size == Size.Large,
    'left-14 top-14  w-3 h-3': size == Size.xLarge,
    'left-[76px] top-[76px]  w-3 h-3': size == Size.xxLarge,
  });
  return (
    <>
      <div className={clsx('relative',classname)}>
        <img src={img} alt={alt} {...rest} loading='lazy' className={clsx(sizeStyle)} onError={(erorr)=>{
          (erorr.target as HTMLImageElement).src = IconError
        }} />
        {isOnline && (
          <span
            className={clsx(sizeOnline, 'absolute bg-blue-500 border-2 border-white rounded-full')}
          />
        )}
      </div>
    </>
  );
};
