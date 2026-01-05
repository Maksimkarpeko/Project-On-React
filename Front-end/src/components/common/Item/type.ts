import type { HTMLAttributes} from 'react';

export interface ItemProps extends HTMLAttributes<HTMLImageElement> {
  img: string;
	activeImg?:string;
  classname?: string;
  alt: string;
  callback?:() => void;
	isActive?:boolean,
}
