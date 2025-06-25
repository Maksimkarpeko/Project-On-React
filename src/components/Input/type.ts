import type { InputHTMLAttributes, ReactNode } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	children?:ReactNode,
	type:string,
	name:string,
	placeholder:string,
	classname?:string,
}