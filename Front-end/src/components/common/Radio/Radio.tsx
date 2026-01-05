import type { FC } from 'react';

import clsx from 'clsx';

import style from './radio.module.scss';
import type { RadioProps } from './type';

export const Radio: FC<RadioProps> = ({ classname, ...rest }) => {
  return (
    <input type="radio" name="radio" className={clsx(classname, style.customRadio)} {...rest} />
  );
};
