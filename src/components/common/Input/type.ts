import type { InputHTMLAttributes } from 'react';

import { Color } from 'constants/color';

import type { InputTitle, OtherStyle, Variant } from './constant';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  placeholder: string;
  classname?: string;
  variant: Variant;
  inputColor?: Color;
  inputTitle?: InputTitle;
  title?: string;
  id?: string;
  otherStyle?:OtherStyle,
  inputStyle?:string,
}
