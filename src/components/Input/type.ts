import type { InputHTMLAttributes} from 'react';
import type { InputColor, InputTitle,Variant } from './constant';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	type:string,
	name:string,
	placeholder:string,
	classname?:string,
	variant:Variant,
	inputColor?:InputColor,
	inputTitle?:InputTitle,
	title?: string,
	id?:string,
}