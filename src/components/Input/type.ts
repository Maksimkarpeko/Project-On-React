import type { InputHTMLAttributes, ReactNode } from 'react';
import type { typeInput } from './constant';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	type:string,
	name:string,
	placeholder:string,
	classname?:string,
	typeInput:typeInput,
	switcher?:boolean,
	beforeImg?:ReactNode,
	afterImg?:ReactNode,
}