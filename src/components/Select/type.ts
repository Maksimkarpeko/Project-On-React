import type { HTMLAttributes } from 'react';

import type { SelectColor } from './constant';

export interface ISelect extends HTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  classname?: string;
  label?: string;
  id?: string;
  selectColor?: SelectColor;
}
