import type { FC } from 'react';

import style from './checkbox.module.scss';
import type { CheckboxProps} from './type';

export const Checkbox: FC<CheckboxProps> = ({ required, ...rest }) => {
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
