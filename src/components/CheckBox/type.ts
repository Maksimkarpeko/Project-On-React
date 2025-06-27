import type { HTMLAttributes } from 'react';

export interface ICheckbox extends HTMLAttributes<HTMLInputElement>  {
	required?:boolean,
}