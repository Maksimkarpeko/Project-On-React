import type { HTMLAttributes } from 'react';

import type { Color } from 'constants/color';
import type { OptionSelect } from 'constants/utills';

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: OptionSelect;
  classname?: string;
  label?: string;
  id?: string;
  selectColor?: Color;
}
