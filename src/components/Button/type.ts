import type { ButtonHTMLAttributes, ReactNode} from 'react';
import type { buttonColor, buttonSize } from './constantsButton';


export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children:ReactNode,
  type: 'button' | 'submit' | 'reset';
  classname?:string,
  size?:buttonSize,
  color?:buttonColor
}