import type { ButtonHTMLAttributes, ReactNode} from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?:boolean;
  children:ReactNode,
  type: 'button' | 'submit' | 'reset';
}