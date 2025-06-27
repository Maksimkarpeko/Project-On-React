import type { FC } from 'react';

import style from './checkBox.module.scss';
import type { ICheckbox } from './type';

export const Checkbox: FC<ICheckbox> = ({ required, ...rest }) => {
  return (
    <input
      type="checkbox"
      name="checkbox"
      className={style.customCheckBox}
      {...rest}
      required={required}
    />
  );
};
