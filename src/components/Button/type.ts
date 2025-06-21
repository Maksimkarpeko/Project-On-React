import type { ButtonHTMLAttributes, ReactNode} from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children:ReactNode,
  type: 'button' | 'submit' | 'reset';
  classNameButton?:string,
  isPrimary?:boolean
}