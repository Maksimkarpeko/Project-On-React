import type { InputHTMLAttributes, ReactNode } from 'react';
import type { inputColor, inputTitle,variant } from './constant';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	type:string,
	name:string,
	placeholder:string,
	classname?:string,
	Variant:variant,
	inputColor?:inputColor,
	inputTitle?:inputTitle,
	beforeImg?:ReactNode,
	afterImg?:ReactNode,
	title?: string,
}