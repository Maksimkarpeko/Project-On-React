import type { FC } from 'react';

import clsx from 'clsx';

import style from './input-style.module.scss';
import type { IInput } from './type';

export const Input: FC<IInput> = ({
  type,
  placeholder,
  name,
  onChange,
  value,
  required,
  children,
  classname,
  ...rest
}) => {
  const inputClassName = clsx({});
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      required={required}
      className={clsx(style.customRadio, inputClassName, classname)}
      {...rest}
    >
      {children}
    </input>
  );
};
