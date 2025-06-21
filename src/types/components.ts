import type { ButtonHTMLAttributes } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading:boolean;
  text: string;
  type: 'button' | 'submit' | 'reset';
  img?: string;
}