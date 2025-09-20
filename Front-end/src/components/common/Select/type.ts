import type { HTMLAttributes } from 'react';

import type { Color} from 'constants/color';
import type { OptionSelect } from 'utils/utills';
import type { Size } from 'constants/size';

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: OptionSelect;
  classname?: string;
  label?: string;
  id?: string;
  value:string,
  selectColor?: Color;
  name?:string
  size?:Size
}
