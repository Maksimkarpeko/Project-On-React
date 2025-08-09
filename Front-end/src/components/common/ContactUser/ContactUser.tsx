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
  phoneText,
  isOnlineUser,
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
    "block text-sm",
    isActive ? "text-white":'',
    statusClass,
  )
  const styleNameClass = clsx(
    "block pt-1",
    isActive ?'text-white':'',
    nameClass
  )
  const [isOnline] = useState<boolean|undefined>(isOnlineUser);
  return (
    <div className={containterStyle} {...rest}>
      <Avatars
        img={img}
        alt={alt}
        isOnline={isOnline}
        size={AvatarSize}
        classname="ml-2 mt-2"
      />
      <div className="flex flex-col">
        <span className={styleNameClass}>{name}</span>
        <span className={clsx(statusTextClass,isOnline ? "text-blue-500" : '')}> 
          {isOnline === true && "online"}
          {isOnline === false && "ofline"}
          {phoneText}
        </span>
      </div>
    </div>
  );
};
