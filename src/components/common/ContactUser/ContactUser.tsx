import { type FC, useState} from 'react';


import { Avatars } from '../Avatars/Avatars';
import { Size } from '../Avatars/constants';
import type { ContactUserProps } from './type';
import clsx from 'clsx';

export const ContactUser: FC<ContactUserProps> = ({name,img,alt,classname,isActive, ...rest}) => {
  const [online, setOnline] = useState<boolean>(true);
  return (
    <div className={clsx("w-[100%] h-14 hover:bg-slate-100 cursor-pointer",isActive ? 'bg-blue-500 hover:bg-blue-500':'')}  {...rest}>
      <Avatars
        img={img}
        alt={alt}
        isOnline={online}
        size={Size.Medium}
        classname="ml-4 mt-2"
      />
      <div className="flex flex-col">
        <span className={clsx("block ml-20  pt-1",isActive &&'text-white')}>{name}</span>
        {online ? (
          <span className={clsx("block ml-20 text-blue-500 text-sm", isActive ? "text-white":'')}>online</span>
        ) : (
          <span className="block ml-20 text-sm">offline</span>
        )}
      </div>
    </div>
  );
};
