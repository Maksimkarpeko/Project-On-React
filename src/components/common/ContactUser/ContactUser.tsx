import { type FC, useState} from 'react';


import { Avatars } from '../Avatars/Avatars';
import { Size } from '../Avatars/constants';
import type { ContactUserProps } from './type';
import clsx from 'clsx';

export const ContactUser: FC<ContactUserProps> = ({
  name,
  img,
  alt,
  isActive, 
  AvatarSize = Size.Medium,
  disableHover = false,
  classname,
  nameClass,
  statusClass,
  disablePointer,
  ...rest}) => {
  const containterStyle = clsx(
    "w-[100%] h-14 flex",
     {
      'cursor-pointer': !disablePointer,
      'bg-blue-500': isActive,
      'hover:bg-blue-500': isActive && !disableHover,
      'hover:bg-slate-100': !isActive && !disableHover,
    },
    classname,
  )
  const statusTextClass = clsx(
    "block text-blue-500 text-sm",
    isActive ? "text-white":'',
    statusClass
  )
  const styleNameClass = clsx(
    "block pt-1",
    isActive ?'text-white':'',
    nameClass
  )
  const [online] = useState<boolean>(true);
  return (
    <div className={containterStyle} {...rest}>
      <Avatars
        img={img}
        alt={alt}
        isOnline={online}
        size={AvatarSize}
        classname="ml-2 mt-2"
      />
      <div className="flex flex-col">
        <span className={styleNameClass}>{name}</span>
        <span className={statusTextClass}> 
          {online ? 'online' : 'offline'}
        </span>
      </div>
    </div>
  );
};
