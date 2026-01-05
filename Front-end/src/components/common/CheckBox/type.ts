import type { HTMLAttributes } from 'react';

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement>  {
	required?:boolean,
}