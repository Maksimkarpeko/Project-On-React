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
  classname,
  typeInput,
  switcher,
  beforeImg,
  afterImg,
  ...rest
}) => {
  const inputClassName = clsx({
    [style.customRadio]: typeInput == 'radio',
    'w-5 h-5 cursor-pointer': typeInput == 'checkbox',
  });
  return (
    <>
      {beforeImg && <img src={`${beforeImg}`} alt={'картинка'}/>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required={required}
        className={clsx(inputClassName, classname)}
        {...rest}
      />
      {switcher && <span className={style.customSwitcher}></span>}
      {afterImg && <img src={`${afterImg}`} alt='картинка'/>}
    </>
  );
};
