import { type FC, useState } from 'react';


import { Avatars } from '../Avatars/Avatars';
import { Size } from '../Avatars/constants';
import type { ContactUserProps } from './type';

export const ContactUser: FC<ContactUserProps> = ({name,img,alt}) => {
  const [online, setOnline] = useState<boolean>(true);
  return (
    <div className="w-[100%] h-14 hover:bg-slate-100 cursor-pointer">
      <Avatars
        img={img}
        alt={alt}
        isOnline={online}
        size={Size.Medium}
        classname="ml-4 mt-2"
      />
      <div className="flex flex-col">
        <span className="block ml-20 font-bold pt-1">{name}</span>
        {online ? (
          <span className="block ml-20 text-blue-500 text-sm">online</span>
        ) : (
          <span className="block ml-20 text-sm">offline</span>
        )}
      </div>
    </div>
  );
};
