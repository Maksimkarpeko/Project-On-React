import type { HTMLAttributes } from 'react';
import type { Size } from './constants';

export interface AvatarsProps extends HTMLAttributes<HTMLImageElement>{
	img:string,
	alt:string,
	classname?:string,
	size:Size,
	isOnline:boolean | undefined,
}