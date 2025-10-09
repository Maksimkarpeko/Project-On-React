import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { buttonSize } from './constant';
import type { Color } from 'constants/color';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  classname?: string;
  size?: buttonSize;
  color?: Color;
}
