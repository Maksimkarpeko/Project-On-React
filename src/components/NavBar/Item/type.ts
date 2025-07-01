import type { HTMLAttributes} from 'react';

export interface ItemProps extends HTMLAttributes<HTMLImageElement> {
  img: string;
	activeImg?:string;
  classname?: string;
  alt: string;
  setPage?: (type:string) => void;
	isActive?:boolean,
}
