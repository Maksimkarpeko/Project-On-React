import type { FC, HTMLAttributes } from 'react';

import style from './radio.module.scss';

export const Radio: FC<HTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
  return <input type="radio" name="radio" className={style.customRadio} {...rest} />;
};
